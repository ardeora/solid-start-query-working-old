import {
  StartServer,
  createHandler,
  renderAsync,
  renderStream,
} from "solid-start/entry-server";

export default createHandler(
  renderAsync((event) => <StartServer event={event} />)
);
