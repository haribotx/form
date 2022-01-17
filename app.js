import { hitTemplate } from "./helpers";

const search = instantsearch({
  appId: "1VOG5KQH4V",
  apiKey: "ffa8fd6cf3293106a06d4a77137b8316",
  indexName: "hooli",
  searchParameters: {
    hitsPerPage: 4,
    distinct: 3
  }
});

// Uncomment the following widget to add hits list.

search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      empty: "No results.",
      allItems(res) {
        return hitTemplate(res);
      }
    }
  })
); 

// Uncomment the following widget to add a search bar.

search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#searchbox",
    placeholder: "Search in your CRM",
    autofocus: false
  })
); 

// Uncomment the following widget to add search stats.

/* search.addWidget(
  instantsearch.widgets.stats({
    container: "#stats",
    templates: {
      body(hit) {
        return `<span role="img" aria-label="emoji">⚡️</span> <strong>${hit.nbHits}</strong> results found ${
          hit.query != "" ? `for <strong>"${hit.query}"</strong>` : ``
        } in <strong>${hit.processingTimeMS}ms</strong>`;
      }
    }
  })
); */

// Uncomment the following widget to add types list.

search.addWidget(
  instantsearch.widgets.refinementList({
    container: "#type",
    attributeName: "type",
    autoHideContainer: false,
    templates: {
      header: "Categories"
    }
  })
); 

search.start();