import json
from graphify.build import build_from_json
from graphify.cluster import score_all
from graphify.analyze import god_nodes, surprising_connections, suggest_questions
from graphify.report import generate
from pathlib import Path

extraction = json.loads(Path('.graphify_extract.json').read_text())
detection = json.loads(Path('.graphify_detect.json').read_text())
analysis = json.loads(Path('.graphify_analysis.json').read_text())

G = build_from_json(extraction)
communities = {int(k): v for k, v in analysis['communities'].items()}
cohesion = {int(k): v for k, v in analysis['cohesion'].items()}
tokens = {'input': extraction.get('input_tokens', 0), 'output': extraction.get('output_tokens', 0)}

# Community labels based on node content analysis
labels = {
    0: "Dialog + Input + Map Combo",
    1: "Debug Collector",
    2: "Dropdown Menu",
    3: "Menu Bar",
    4: "Alert Dialog",
    5: "Breadcrumb",
    6: "Navigation Menu",
    7: "Pagination",
    8: "Select",
    9: "Sidebar",
    10: "Form Controls",
    11: "Sheet Drawer",
    12: "Vite Config",
    13: "Error Boundary",
    14: "Carousel",
    15: "Context Menu",
    16: "Drawer",
    17: "Table",
    18: "Theme + Toaster",
    19: "Accordion",
    20: "Avatar",
    21: "Card",
    22: "Input OTP",
    23: "Item Group",
    24: "Tabs",
    25: "Toggle Group",
    26: "Tooltip",
    27: "PDF Text Extraction",
    28: "PDF File Export",
    29: "Alert",
    30: "Calendar",
    31: "Chart",
    32: "Collapsible",
    33: "Hover Card",
    34: "Radio Group",
    35: "Resizable",
    36: "Scroll Area",
    37: "Slider",
    38: "App Router",
    39: "Login Constants",
    40: "Manus Dialog",
    41: "Badge",
    42: "Button Group",
    43: "Button",
    44: "Checkbox",
    45: "Command",
    46: "Empty",
    47: "Field",
    48: "Input Group",
    49: "Keyboard",
    50: "Label",
    51: "Popover",
    52: "Separator",
    53: "Skeleton",
    54: "Spinner",
    55: "Mobile Hook",
    56: "Utils",
    57: "Home Page",
    58: "Not Found Page",
    59: "Server Index",
    60: "Extract Runner",
    61: "Main Entry",
    62: "Aspect Ratio",
    63: "Progress",
    64: "Switch",
    65: "Toggle",
    66: "Case Study Page",
    67: "Resume Page",
    68: "Tailwind Config",
    69: "Theme Config",
    70: "Shared Constants",
}

questions = suggest_questions(G, communities, labels)

report = generate(G, communities, cohesion, labels, analysis['gods'], analysis['surprises'], detection, tokens, '.', suggested_questions=questions)

with open('graphify-out/GRAPH_REPORT.md', 'w', encoding='utf-8') as f:
    f.write(report)

Path('.graphify_labels.json').write_text(json.dumps({str(k): v for k, v in labels.items()}))
print("Report updated with community labels")