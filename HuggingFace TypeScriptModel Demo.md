Install transformers


```python
!pip install transformers
```

    huggingface/tokenizers: The current process just got forked, after parallelism has already been used. Disabling parallelism to avoid deadlocks...
    To disable this warning, you can either:
    	- Avoid using `tokenizers` before the fork if possible
    	- Explicitly set the environment variable TOKENIZERS_PARALLELISM=(true | false)


    Requirement already satisfied: transformers in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (4.51.3)
    Requirement already satisfied: filelock in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from transformers) (3.18.0)
    Requirement already satisfied: huggingface-hub<1.0,>=0.30.0 in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from transformers) (0.31.2)
    Requirement already satisfied: numpy>=1.17 in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from transformers) (2.2.6)
    Requirement already satisfied: packaging>=20.0 in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from transformers) (24.2)
    Requirement already satisfied: pyyaml>=5.1 in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from transformers) (6.0.2)
    Requirement already satisfied: regex!=2019.12.17 in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from transformers) (2024.11.6)
    Requirement already satisfied: requests in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from transformers) (2.32.3)
    Requirement already satisfied: tokenizers<0.22,>=0.21 in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from transformers) (0.21.1)
    Requirement already satisfied: safetensors>=0.4.3 in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from transformers) (0.5.3)
    Requirement already satisfied: tqdm>=4.27 in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from transformers) (4.67.1)
    Requirement already satisfied: fsspec>=2023.5.0 in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from huggingface-hub<1.0,>=0.30.0->transformers) (2025.3.0)
    Requirement already satisfied: typing-extensions>=3.7.4.3 in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from huggingface-hub<1.0,>=0.30.0->transformers) (4.13.2)
    Requirement already satisfied: charset-normalizer<4,>=2 in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from requests->transformers) (3.4.2)
    Requirement already satisfied: idna<4,>=2.5 in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from requests->transformers) (3.10)
    Requirement already satisfied: urllib3<3,>=1.21.1 in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from requests->transformers) (2.4.0)
    Requirement already satisfied: certifi>=2017.4.17 in /opt/homebrew/Caskroom/miniconda/base/envs/dissertation_apple/lib/python3.13/site-packages (from requests->transformers) (2025.4.26)


Load the model from huggingface and generate a function that returns a user object


```python
from transformers import AutoTokenizer, AutoModelForCausalLM

model_id = "zfir/typescriptmate-4000"

tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(model_id)

prompt = "function getUser() {"
inputs = tokenizer(prompt, return_tensors="pt")
outputs = model.generate(**inputs, max_new_tokens=50)
print(tokenizer.decode(outputs[0]))
```

    Setting `pad_token_id` to `eos_token_id`:50256 for open-end generation.


    function getUser() {
        return User.getUser(
                                           

