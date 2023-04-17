import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetail from '../views/MovieDetail';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from "react-router-dom";
import { getMovieExtraData } from '../features/movies/moviesSlice';
import thunk from 'redux-thunk';

jest.mock('../assets/avatar-placeholder.webp', () => 'avatar-placeholder');

//mock for async func
const mockStore = configureStore([thunk]);

//render all components with a redux wrapper to provide context
const renderWithRedux = (component, store) => {
  return {
    ...render(<Provider store={store}><MemoryRouter>{component}</MemoryRouter></Provider>),
    store,
  };
};

describe('<MovieDetail /> component', () => {
  it('should render MovieDetailComponent', async () => {

    const store = mockStore({ movies: { movieEmbeddedData: null }, spinner: { showSpinner: false } });
  
    await store.dispatch(getMovieExtraData('1'));
  
    act(() => {
      renderWithRedux(<MovieDetail />, store);
    });
  
    await expect(screen.getByText('Cast info')).toBeInTheDocument();
  });
  it('should render the movie banner', () => {
    const store = mockStore({
      movies: {
        movieEmbeddedData: {
          images: [{ url: 'http://example.com/image.jpg', type: 'background' }]
        }
      },
      spinner: { showSpinner: false }
    });
  
    renderWithRedux(<MovieDetail />, store);
  
    expect(screen.getByAltText('movie banner')).toBeInTheDocument();
  });
  it('should render the movie general information', () => {
    const store = mockStore({
      movies: {
        movieExtraData: {
          schedule: { days: ['Monday'], time: '20:00' },
          rating: { average: '8.5' }
        }
      },
      spinner: { showSpinner: false }
    });
  
    renderWithRedux(<MovieDetail />, store);
  
    expect(screen.getByText('Monday 20:00')).toBeInTheDocument();
    expect(screen.getByText('8.5')).toBeInTheDocument();
  });
});

