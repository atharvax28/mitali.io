import json
from pathlib import Path

ast = json.loads(Path('.graphify_ast.json').read_text())
cached = json.loads(Path('.graphify_cached.json').read_text())

# Deduplicate by ID
seen = {n['id'] for n in ast['nodes']}
merged_nodes = list(ast['nodes'])
for n in cached['nodes']:
    if n['id'] not in seen:
        merged_nodes.append(n)
        seen.add(n['id'])

merged_edges = ast['edges'] + cached['edges']
merged_hyperedges = cached.get('hyperedges', [])

result = {
    'nodes': merged_nodes,
    'edges': merged_edges,
    'hyperedges': merged_hyperedges,
    'input_tokens': 0,
    'output_tokens': 0,
}

Path('.graphify_extract.json').write_text(json.dumps(result, indent=2))
print(f"Merged: {len(merged_nodes)} nodes, {len(merged_edges)} edges")