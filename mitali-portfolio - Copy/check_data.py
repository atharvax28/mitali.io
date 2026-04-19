import json
cached = json.loads(open('.graphify_cached.json').read())
print(f"Cached nodes: {len(cached['nodes'])}, edges: {len(cached['edges'])}")
with open('.graphify_uncached.txt') as f:
    uncached = f.read().strip().split('\n')
print(f"Files to extract: {len(uncached)}")