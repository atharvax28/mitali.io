import json
from graphify.cache import check_semantic_cache
from pathlib import Path

detect = json.loads(open('.graphify_detect.json').read())
all_files = [f for files in detect['files'].values() for f in files]
cached_nodes, cached_edges, cached_hyperedges, uncached = check_semantic_cache(all_files)

open('.graphify_cached.json', 'w').write(json.dumps({'nodes': cached_nodes, 'edges': cached_edges, 'hyperedges': cached_hyperedges}))
open('.graphify_uncached.txt', 'w').write('\n'.join(uncached))

print(f"Cache: {len(all_files)-len(uncached)} files hit, {len(uncached)} files need extraction")