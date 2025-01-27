import { webSearch } from "./actions/webSearch";
<<<<<<< Updated upstream
import { Plugin } from "@elizaos/core";
=======
>>>>>>> Stashed changes
import { WebSearchService } from "./services/webSearchService";
import type { Plugin } from "@elizaos/core";

export const webSearchPlugin: Plugin = {
    name: "webSearch",
    description: "Search the web and get news",
    actions: [webSearch],
    evaluators: [],
    providers: [],
    services: [new WebSearchService()],
    clients: [],
};

export { WebSearchService, webSearch };
export default webSearchPlugin;
