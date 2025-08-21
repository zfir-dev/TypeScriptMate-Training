# TypeScriptMate-Training

## Dataset Import and Setup

Before starting any training or preprocessing, you need to import the required datasets. Follow these steps:

### 1. Install Required Packages

```bash
pip install gdown
```

### 2. Import Datasets

Run the `Setup and Import Datasets.ipynb` notebook to download and extract all required datasets:

- **BigCode TypeScript Dataset (4K samples)**: `bigcode-ts-output-4000-formatted.zip` and `bigcode-ts-output-4000-types.csv`
- **BigCode TypeScript Dataset (50K samples)**: `bigcode-ts-output-50000-formatted.zip` and `bigcode-ts-output-50000-types.csv`
- **GitHub TypeScript Dataset**: `github-ts-output-formatted.zip` and `github-ts-output-types.csv`

The notebook will:
- Create an `outputs/` directory
- Download all datasets from Google Drive
- Extract the ZIP files automatically

### 3. Verify Dataset Import

After running the notebook, ensure the following files exist in your `outputs/` directory:
- `bigcode-ts-output-4000/` (extracted folder)
- `bigcode-ts-output-50000/` (extracted folder)
- `github-ts-output/` (extracted folder)
- All corresponding `.csv` type files

---

## Steps to Train Model:

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

---

## Model Analytics and Insights

### Completions and Feedbacks Analysis

The `Completions and Feedbacks Insights.ipynb` notebook provides comprehensive analytics on your trained TypeScriptMate model's performance:

#### Features:
- **Completions Analysis**: 
  - Count and analyze completion availability
  - Latency tracking over time
  - Performance metrics visualization
  
- **Feedback Analysis**:
  - Acceptance rate analysis
  - Response time distribution
  - User interaction patterns
  - Prefix percentage correlation with response time

#### Setup Requirements:
```bash
pip install streamlit pandas plotly matplotlib supabase
```

#### Configuration:
- Set up Supabase credentials for data access
- Configure bucket name and file paths
- Access completions.csv and feedbacks.modified.csv files

This notebook is essential for:
- Monitoring model performance in production
- Understanding user acceptance patterns
- Optimizing response times
- Identifying areas for model improvement

---

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

Problems with evaluate lib:
```
pip install --user evaluate
```

---

## Model Demo and Usage

### HuggingFace TypeScriptModel Demo

The `HuggingFace TypeScriptModel Demo.ipynb` notebook demonstrates how to load and use your trained TypeScriptMate model for code generation:

#### Setup Requirements:
```bash
pip install transformers
```

#### Features:
- **Model Loading**: Load the trained model from HuggingFace Hub
- **Code Generation**: Generate TypeScript code completions
- **Interactive Testing**: Test the model with custom prompts
