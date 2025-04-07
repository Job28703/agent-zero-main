# Technical Context

## Development Environment
- Python 3.12
- CUDA compatible environment for GPU support
- Git for version control

## Core Dependencies
- PyTorch
- Transformers
- OpenAI API
- PIL (Python Imaging Library)
- NumPy
- Pandas
- tqdm

## Installation Steps
1. Clone repository:
   ```bash
   git clone https://github.com/aiming-lab/MDocAgent.git
   cd MDocAgent
   ```

2. Create and activate conda environment:
   ```bash
   conda create -n mdocagent python=3.12
   conda activate mdocagent
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure OpenAI API key:
   - Set environment variable OPENAI_API_KEY
   - Or configure in config file

## Technical Architecture
- Multi-agent system with specialized agents
- Modular design for text and image processing
- API integration for language model inference
- Data pipeline for document processing
- Evaluation framework for benchmarking

## Development Guidelines
1. Follow Python code style guidelines
2. Document all functions and classes
3. Use type hints for better code clarity
4. Implement error handling for API calls
5. Write unit tests for new functionality 