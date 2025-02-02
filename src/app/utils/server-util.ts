import "server-only";
export const serverSideFuction = () => {
  //  npm i server-only
  console.log(
    `
        This is a server side function
        `
  );
  return "server result";
};
