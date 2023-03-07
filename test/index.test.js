import Home from "@/pages";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Home", () => {
  test("debería mostrar los tags", () => {
    const articles = [
      {
        id: 1,
        taxonomy: {
          tags: [
            { slug: "tag1", text: "Tag 1" },
            { slug: "tag2", text: "Tag 2" },
          ],
        },
      },
      { id: 2, taxonomy: { tags: [{ slug: "tag2", text: "Tag 2" }] } },
    ];
    const { container } = render(<Home data={articles} />);
    const tagElements = container.querySelectorAll(".cont_tags a");
    expect(tagElements.length).toBe(2);
    expect(tagElements[0]).toHaveTextContent("Tag 2");
  });

  test("debería mostrar los artículos", () => {
    const articles = [
      {
        id: 1,
        subtype: "7",
        promo_items: { basic: { url: "https://example.com/image.jpg" } },
        headlines: { basic: "Título del artículo" },
        display_date: "2022-03-07T12:00:00.000Z",
      },
    ];
    const { container } = render(<Home data={articles} />);
    const articleElements = container.querySelectorAll(".mod-caja-nota");
    expect(articleElements.length).toBe(1);
    expect(articleElements[0]).toHaveTextContent("Título del artículo");
  });
});
