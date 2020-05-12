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
    "7af6ca3d6725b3a7428497b1df197080"
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
          </div>
          <div></div>
        </>
      </ThemeProvider>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="users">
          <div className="search-panel">
            <SearchBox
              className="searchbox"
              translations={{
                placeholder: "",
              }}
            />
            <Hits hitComponent={Hit} />

            <div className="pagination">
              <Pagination />
            </div>
          </div>
        </InstantSearch>
      </div>
    </Fragment>
  );
}
function Hit(props) {
  return (
    <article>
      <h1>
        <Highlight attribute="description" hit={props.hit} />
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
