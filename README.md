# TypeScriptMate-Training

Steps to Train Model:

1. Data Preprocess to remove Uncomplete TS files
    -  The preprocessing script to ru prettier on all ts files
    ```bash
    chmod +x copy-dataset-prettier-passed.sh
    ./copy-dataset-prettier-passed.sh
    ```

2. Data Preprocessing to extracts Types Awareness
   - The preprocessing script extracts type information from TypeScript files using ts-morph
   - It identifies and extracts:
     - Interface declarations
     - Type alias declarations
     - Enum declarations
     - Predefined types
     - Type identifiers
    ```bash
    npm init -y
    npm install ts-morph csv-writer typescript
    ```
    ```bash
    npx tsc type-aware-preprocessing-in-ts-files.ts
    node --max-old-space-size=8192 type-aware-preprocessing-in-ts-files.js
    ```

3. Model Training
   - Use the generated CSV of the Data Preprocessing file as input for training
   - The extracted type information can be used to train a model for type prediction
   - Run all the steps in the `TypeScript Files to Transformer Model` notebook
