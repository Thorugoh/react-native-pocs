# Infinite Scroll App (POC)

This project is a Proof of Concept (POC) built with React Native and Expo to study and demonstrate:

- **SQLite integration**: Using the [`expo-sqlite`](https://docs.expo.dev/versions/latest/sdk/sqlite/) library for local data storage and querying.
- **Infinite Scroll**: Implementing efficient infinite scrolling with React Native's `FlatList` component.

## Features

- Initializes a local SQLite database and seeds it with sample product data on first run.
- Loads products in pages from the database, fetching more as the user scrolls.
- Shows a loading indicator while fetching data.

## Project Structure

- `App.tsx`: App entry point, sets up the SQLite provider and suspense loading.
- [`src/database/databaseInit.ts`](src/database/databaseInit.ts): Handles database initialization and table creation.
- [`src/database/seed.ts`](src/database/seed.ts): Seeds the database with sample products.
- [`src/app/Home.tsx`](src/app/Home.tsx): Main screen, implements infinite scroll and data fetching.
- [`src/components/Card.tsx`](src/components/Card.tsx): Displays individual product cards.
- [`src/components/Loading.tsx`](src/components/Loading.tsx): Loading spinner component.
- [`src/types/product.d.ts`](src/types/product.d.ts): Type definition for `Product`.


## How to Run

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the Expo development server:
   ```sh
   npx expo start
   ```
3. Open the app in Expo Go or an emulator.