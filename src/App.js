import React, { useState, useRef, Component, Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks.js";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { Burger, Menu } from "./components";
import FocusLock from "react-focus-lock";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Hits,
  SearchBox,
  RefinementList,
  Pagination,
  Highlight,
} from "react-instantsearch-dom";
import PropTypes from "prop-types";
import "./App.css";
function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const searchClient = algoliasearch(
    "JT7M5SMQEI",
    "9c02bdf5c366050a28c6c29fbf3e94e6"
  );

  useOnClickOutside(node, () => setOpen(false));

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
            {/* <header className="header"> */}
            <div className="container">
              <InstantSearch searchClient={searchClient} indexName="user">
                {/* <div className="search-panel">
              <div className="search-panel__filters">
                <RefinementList attribute="brand" />
              </div> */}
                <SearchBox
                  className="searchbox"
                  translations={{
                    placeholder: "Search BurghyDeals",
                  }}
                />
                <Hits hitComponent={Hit} />

                <div className="pagination">
                  <Pagination />
                </div>
              </InstantSearch>
            </div>
            {/* </header> */}
          </div>
          <div></div>
        </>
      </ThemeProvider>
    </Fragment>
  );
}
function Hit(props) {
  return (
    <article>
      <h1>
        <Highlight attribute="name" hit={props.hit} />
      </h1>
      <p>
        <Highlight attribute="description" hit={props.hit} />
      </p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
