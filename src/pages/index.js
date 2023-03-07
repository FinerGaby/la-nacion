import { useMemo } from "react";
import { Button } from "../../common/components/Button";
import { CustomLink } from "../../common/components/CustomLink";
import { formatDate } from "../../common/utils";
import { ListArticles } from "../../common/components/ListArticles";
import { NEXT_PUBLIC_API_URL } from "../../config";
export const getStaticProps = async () => {
  try {
    const fetching = await fetch(`${NEXT_PUBLIC_API_URL}/api/articles`);
    let data = await fetching.json();
    return {
      props: {
        data,
      },
    };
  } catch (e) {
    return {
      props: {
        data: [],
      },
    };
  }
};

const SUBTYPE_ARTICLES = "7";
const Home = (props) => {
  const articles = props?.data;

  const listTaxonomy = useMemo(() => {
    const groupedTags = articles?.reduce((acc, item) => {
      item.taxonomy?.tags.forEach((tag) => {
        const foundTag = acc.find((el) => el.slug === tag.slug);
        if (foundTag) {
          foundTag.count++;
        } else {
          acc.push({
            slug: tag.slug,
            text: tag.text,
            count: 1,
          });
        }
      });
      return acc;
    }, []);

    const sortedTags = groupedTags
      ?.sort((a, b) => b.count - a.count)
      .slice(0, 10);
    return sortedTags;
  }, [articles]);

  const listArticles = useMemo(
    () => articles.filter((item) => item.subtype === SUBTYPE_ARTICLES),
    [articles]
  );

  return (
    <main>
      <div class="lay-sidebar">
        <div class="sidebar__main">
          <div class="row">
            <div class="com-titleWithfollow hlp-marginBottom-15">
              <h1 class="com-title-section-xl hlp-marginBottom-40">
                Acumulado Grilla
              </h1>
            </div>
          </div>
          <div class="row">
            <div id="" class="cont_tags com-secondary-tag hlp-marginBottom-20">
              {listTaxonomy?.map((item, index) => (
                <CustomLink key={index} href={`/tema/${item.slug}`}>
                  {item.text}
                </CustomLink>
              ))}
            </div>
          </div>
          <section class="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
            {listArticles.map((item, index) => (
              <ListArticles
                key={index}
                img={item?.promo_items?.basic?.url}
                title={item?.headlines?.basic}
                date={formatDate(item.display_date)}
              />
            ))}
            <div class="transparency" style={{ height: "322px" }}></div>
          </section>
          <section class="row">
            <div class="col-12 hlp-text-center hlp-margintop-40">
              <Button
                className="--btn --secondary"
                title="MAS NOTAS DE ACUMULADO GRILLA"
              />
            </div>{" "}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
