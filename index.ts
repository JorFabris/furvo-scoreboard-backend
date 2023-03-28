import ServerExpress from "./classes/server";

const serverExpress = new ServerExpress();

serverExpress.start(() => {
  console.log(`SERVER RUNNING IN PORT ${process.env.PORT}`);
});
