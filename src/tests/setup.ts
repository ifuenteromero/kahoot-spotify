import '@testing-library/jest-dom/vitest'; // Si no, da error los matchers ej toBeInTheDocument
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
