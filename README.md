# TypeScriptMate-Training

Steps to Train Model:

1. Data Preprocess to remove Uncomplete TS files
    -  The preprocessing script to ru prettier on all ts files
    ```bash
    chmod +x filter-and-copy-ts-files-if-prettier-passed.sh
    ./filter-and-copy-ts-files-if-prettier-passed.sh
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
    ```bash
    npx tsc copy-compilable-ts.ts
    node --max-old-space-size=8192 copy-compilable-ts.js
    ```


3. Model Training
   - Use the generated CSV of the Data Preprocessing file as input for training
   - The extracted type information can be used to train a model for type prediction
   - Run all the steps in the `TypeScript Files to Transformer Model` notebook

## Running Training with tmux for 500K Dataset

To run the training notebook in a detached session that continues even if your SSH connection/Jupyter connection drops:

```bash
sudo yum install -y tmux

tmux new -s train
papermill TS\ Files\ to\ Transformer\ Model.ipynb executed_notebook.ipynb
```

To reattach to the session:
```bash
tmux attach -t train
```

Deploy on Huggingface:

```bash
brew install huggingface-cli

huggingface-cli login

cd outputs/typescriptmate

huggingface-cli upload zfir/TypeScriptMate .
```

