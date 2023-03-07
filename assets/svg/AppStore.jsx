import * as React from "react";

export const AppStore = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={120} height={35} {...props}>
    <g fill="none" fillRule="evenodd">
      <rect width={119.862} height={35} fill="#5A5A5A" rx={3} />
      <g fill="#FFF" fillRule="nonzero">
        <path d="M31.47 16.317a4.008 4.008 0 0 1 1.9-3.36 4.08 4.08 0 0 0-3.217-1.746c-1.354-.142-2.667.814-3.356.814-.704 0-1.766-.8-2.91-.776a4.284 4.284 0 0 0-3.606 2.208c-1.56 2.71-.396 6.691 1.097 8.881.748 1.073 1.621 2.27 2.764 2.228 1.118-.046 1.536-.715 2.886-.715 1.337 0 1.73.715 2.895.688 1.2-.02 1.956-1.077 2.677-2.16a8.884 8.884 0 0 0 1.225-2.502 3.87 3.87 0 0 1-2.354-3.56zm-2.202-6.546a3.952 3.952 0 0 0 .9-2.825c-1 .106-1.924.585-2.587 1.343a3.76 3.76 0 0 0-.922 2.72 3.3 3.3 0 0 0 2.61-1.238zM45.607 21.851h-3.816l-.916 2.716h-1.617l3.615-10.048h1.68l3.614 10.048h-1.644l-.916-2.716zm-3.42-1.253h3.024l-1.49-4.408h-.043l-1.492 4.408zm13.787.307c0 2.276-1.214 3.739-3.046 3.739a2.473 2.473 0 0 1-2.297-1.282h-.035v3.629h-1.498v-9.75h1.45v1.219h.028a2.587 2.587 0 0 1 2.324-1.296c1.853 0 3.074 1.47 3.074 3.74zm-1.54 0c0-1.484-.764-2.459-1.93-2.459-1.144 0-1.914.996-1.914 2.459 0 1.476.77 2.464 1.915 2.464 1.165 0 1.929-.968 1.929-2.464zm9.574 0c0 2.276-1.214 3.739-3.046 3.739a2.473 2.473 0 0 1-2.297-1.282h-.035v3.629h-1.498v-9.75h1.45v1.219h.028a2.587 2.587 0 0 1 2.324-1.296c1.853 0 3.074 1.47 3.074 3.74zm-1.54 0c0-1.484-.764-2.459-1.929-2.459-1.145 0-1.915.996-1.915 2.459 0 1.476.77 2.464 1.915 2.464 1.165 0 1.93-.968 1.93-2.464zm6.85.862c.111.997 1.076 1.651 2.394 1.651 1.263 0 2.171-.654 2.171-1.553 0-.78-.548-1.247-1.845-1.567l-1.298-.313c-1.838-.446-2.692-1.309-2.692-2.71 0-1.733 1.506-2.924 3.643-2.924 2.116 0 3.566 1.191 3.615 2.925h-1.512c-.09-1.003-.917-1.608-2.124-1.608s-2.033.612-2.033 1.504c0 .71.528 1.128 1.818 1.448l1.103.272c2.054.487 2.908 1.316 2.908 2.785 0 1.88-1.492 3.058-3.865 3.058-2.22 0-3.72-1.15-3.817-2.968h1.534zm9.382-6.26v1.734h1.388v1.191H78.7v4.039c0 .627.278.92.888.92.165-.003.33-.015.493-.035v1.184a4.1 4.1 0 0 1-.832.07c-1.478 0-2.055-.558-2.055-1.979v-4.199h-1.061v-1.19h1.061v-1.735H78.7zm2.192 5.398c0-2.306 1.352-3.754 3.462-3.754 2.116 0 3.463 1.448 3.463 3.754 0 2.311-1.34 3.753-3.463 3.753s-3.462-1.442-3.462-3.753zm5.398 0c0-1.582-.722-2.515-1.936-2.515s-1.936.94-1.936 2.515c0 1.587.722 2.513 1.936 2.513s1.936-.926 1.936-2.513zm2.762-3.664h1.43v1.247h.034c.2-.803.932-1.355 1.756-1.324.172 0 .344.019.513.057v1.406a2.088 2.088 0 0 0-.673-.09 1.507 1.507 0 0 0-1.167.482c-.3.324-.444.763-.395 1.203v4.345h-1.498v-7.326zm10.641 5.174c-.201 1.33-1.492 2.243-3.143 2.243-2.123 0-3.441-1.428-3.441-3.719 0-2.298 1.325-3.788 3.378-3.788 2.02 0 3.29 1.392 3.29 3.614v.515H94.62v.09c-.048.546.14 1.086.515 1.483a1.9 1.9 0 0 0 1.449.593 1.65 1.65 0 0 0 1.686-1.03h1.422zm-5.065-2.186h3.65c.027-.49-.15-.97-.49-1.322a1.752 1.752 0 0 0-1.3-.537 1.845 1.845 0 0 0-1.316.54c-.35.35-.545.824-.544 1.319zM40.243 9.581c0-1.675.83-2.71 2.165-2.71.999-.053 1.868.725 2 1.79h-.744c-.129-.628-.658-1.067-1.256-1.042-.863 0-1.403.756-1.403 1.962 0 1.203.54 1.958 1.406 1.958.576.047 1.102-.353 1.253-.952h.743c-.15 1.04-1.02 1.78-1.996 1.7-1.336 0-2.168-1.034-2.168-2.706zm4.981.631c-.062-.7.25-1.376.805-1.746a1.618 1.618 0 0 1 1.812 0c.555.37.867 1.047.805 1.746.063.7-.248 1.377-.804 1.748-.555.37-1.259.37-1.814 0-.556-.371-.867-1.049-.804-1.748zm2.686 0c0-.846-.354-1.34-.974-1.34-.622 0-.972.494-.972 1.34 0 .851.35 1.342.972 1.342.62 0 .974-.494.974-1.342zm1.697-1.948h.689v.62h.054c.186-.457.62-.736 1.082-.695.358-.03.708.118.952.4.245.282.356.669.304 1.05v2.524h-.716V9.832c0-.627-.253-.938-.783-.938a.804.804 0 0 0-.644.28.937.937 0 0 0-.222.708v2.28h-.716V8.265zm5.515-.075c.816 0 1.349.408 1.419 1.095h-.687c-.066-.286-.326-.469-.732-.469-.4 0-.704.204-.704.508 0 .233.184.38.577.477l.603.15c.69.172 1.013.49 1.013 1.064 0 .733-.636 1.224-1.503 1.224-.863 0-1.426-.42-1.49-1.11h.718c.127.338.453.54.789.487.446 0 .763-.215.763-.527 0-.232-.17-.383-.533-.476l-.633-.157c-.69-.176-1.01-.509-1.01-1.089 0-.69.59-1.177 1.41-1.177zm2.393-.577.836-1.231h.84l-.936 1.231h-.74zm.074.652h.713v3.899h-.713v-3.9zm1.828 4.289h.732c.06.283.364.465.847.465.596 0 .95-.304.95-.82v-.748h-.054c-.229.427-.661.68-1.12.655-.926 0-1.498-.77-1.498-1.937 0-1.188.579-1.969 1.506-1.969.469-.017.908.248 1.139.688h.057v-.623h.686v3.93c0 .892-.65 1.458-1.676 1.458-.907 0-1.493-.437-1.57-1.1zm2.542-2.388c0-.777-.374-1.275-.983-1.275-.617 0-.963.498-.963 1.275 0 .777.346 1.274.963 1.274.613 0 .983-.494.983-1.274zm4.902 1.998h-.69v-.62h-.056c-.188.461-.63.741-1.096.695a1.137 1.137 0 0 1-.946-.4 1.329 1.329 0 0 1-.304-1.043V8.264h.717v2.33c0 .63.236.931.762.931a.792.792 0 0 0 .666-.26.926.926 0 0 0 .23-.72V8.263h.717v3.899zm4.209-1.053c-.2.735-.863 1.21-1.572 1.128a1.597 1.597 0 0 1-1.271-.59 1.86 1.86 0 0 1-.405-1.423 1.89 1.89 0 0 1 .404-1.428c.32-.39.784-.613 1.269-.608 1.01 0 1.618.74 1.618 1.965v.269h-2.562v.043c-.022.289.07.575.254.788a.929.929 0 0 0 .713.329.854.854 0 0 0 .863-.473h.689zm-2.519-1.257h1.833a.983.983 0 0 0-.238-.717.846.846 0 0 0-.655-.292.896.896 0 0 0-.668.292c-.177.19-.275.449-.272.717zm3.557-3.111h.716v5.42h-.716zm1.712 3.47c-.063-.7.249-1.376.804-1.746a1.618 1.618 0 0 1 1.812 0c.555.37.867 1.047.805 1.746.063.7-.248 1.377-.804 1.748-.555.37-1.259.37-1.814 0-.556-.371-.867-1.049-.804-1.748zm2.685 0c0-.846-.354-1.34-.974-1.34-.622 0-.972.494-.972 1.34 0 .851.35 1.342.972 1.342.62 0 .974-.494.974-1.342zm6.733.898c-.2.735-.863 1.21-1.572 1.128a1.597 1.597 0 0 1-1.271-.59 1.86 1.86 0 0 1-.405-1.423 1.89 1.89 0 0 1 .404-1.428c.321-.39.784-.613 1.269-.608 1.01 0 1.618.74 1.618 1.965v.269H80.72v.043c-.023.289.069.575.253.788a.929.929 0 0 0 .713.329.854.854 0 0 0 .863-.473h.69zM80.72 9.853h1.832a.983.983 0 0 0-.238-.717.846.846 0 0 0-.655-.292.896.896 0 0 0-.668.292c-.177.19-.275.449-.271.717zm3.523-1.589h.69v.62h.053c.186-.457.62-.736 1.082-.695.358-.03.708.118.953.4.244.282.356.669.303 1.05v2.524h-.716V9.832c0-.627-.253-.938-.783-.938a.804.804 0 0 0-.644.28.937.937 0 0 0-.222.708v2.28h-.716V8.265zm9.225 2.846c-.201.735-.863 1.21-1.572 1.128a1.597 1.597 0 0 1-1.272-.59 1.86 1.86 0 0 1-.404-1.423 1.89 1.89 0 0 1 .404-1.428c.32-.39.783-.613 1.268-.608 1.01 0 1.619.74 1.619 1.965v.269h-2.562v.043c-.023.289.07.575.253.788a.929.929 0 0 0 .713.329.854.854 0 0 0 .863-.473h.69zm-2.519-1.257h1.832a.983.983 0 0 0-.238-.717.846.846 0 0 0-.655-.292.896.896 0 0 0-.667.292c-.177.19-.275.449-.272.717zm3.556-3.111h.716v5.42h-.716z" />
      </g>
    </g>
  </svg>
);
