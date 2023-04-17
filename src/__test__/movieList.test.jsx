import React from 'react';
import { render, screen } from '@testing-library/react';
import MoviesList from '../features/movies/MoviesList';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from "react-router-dom";


const mockStore = configureStore([]);

const renderWithRedux = (component, store) => {
  return {
    ...render(<Provider store={store}><MemoryRouter>{component}</MemoryRouter></Provider>),
    store,
  };
};

describe('MoviesList', () => {
  it('should show EmptyListMessage when there are no movies', () => {
    const store = mockStore({ movies: { completeList: [] }, spinner: { showSpinner: false } });
    
    renderWithRedux(<MoviesList />, store)

    expect(screen.getByTestId('empty-list-message')).toBeInTheDocument();
  });
  it("should show all movies in the list", () => {
    const movies = [
      {
        show: {
          id: 1,
          image: { original: "http://example.com/image1.jpg" },
          name: "example 1",
          genres: ["Action"],
          network: { country: { name: "United States" } },
          premiered: "2021-01-01",
        },
      },
      {
        show: {
          id: 2,
          image: { original: "http://example.com/image2.jpg" },
          name: "example 2",
          genres: ["Drama"],
          network: { country: { name: "United Kingdom" } },
          premiered: "2021-02-01",
        },
      },
    ];

    const store = mockStore({
      movies: { completeList: movies },
      spinner: { showSpinner: false },
    });

    renderWithRedux(<MoviesList />, store)

    expect(screen.getByText("example 1")).toBeInTheDocument();
    expect(screen.getByText("example 2")).toBeInTheDocument();
    expect(screen.queryByTestId("empty-list-message")).toBeNull();
  });
  it("should show spinner while loading data", () => {
    const store = mockStore({
      movies: { completeList: null },
      spinner: { showSpinner: true },
    });

    renderWithRedux(<MoviesList />, store)

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
    expect(screen.queryByTestId("empty-list-message")).toBeNull();
  });
});
