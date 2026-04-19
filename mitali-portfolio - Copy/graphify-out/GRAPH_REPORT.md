# Graph Report - .  (2026-04-18)

## Corpus Check
- 100 files · ~360,437 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 260 nodes · 209 edges · 71 communities detected
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Dialog + Input + Map Combo|Dialog + Input + Map Combo]]
- [[_COMMUNITY_Debug Collector|Debug Collector]]
- [[_COMMUNITY_Dropdown Menu|Dropdown Menu]]
- [[_COMMUNITY_Menu Bar|Menu Bar]]
- [[_COMMUNITY_Alert Dialog|Alert Dialog]]
- [[_COMMUNITY_Breadcrumb|Breadcrumb]]
- [[_COMMUNITY_Navigation Menu|Navigation Menu]]
- [[_COMMUNITY_Pagination|Pagination]]
- [[_COMMUNITY_Select|Select]]
- [[_COMMUNITY_Sidebar|Sidebar]]
- [[_COMMUNITY_Form Controls|Form Controls]]
- [[_COMMUNITY_Sheet Drawer|Sheet Drawer]]
- [[_COMMUNITY_Vite Config|Vite Config]]
- [[_COMMUNITY_Error Boundary|Error Boundary]]
- [[_COMMUNITY_Carousel|Carousel]]
- [[_COMMUNITY_Context Menu|Context Menu]]
- [[_COMMUNITY_Drawer|Drawer]]
- [[_COMMUNITY_Table|Table]]
- [[_COMMUNITY_Theme + Toaster|Theme + Toaster]]
- [[_COMMUNITY_Accordion|Accordion]]
- [[_COMMUNITY_Avatar|Avatar]]
- [[_COMMUNITY_Card|Card]]
- [[_COMMUNITY_Input OTP|Input OTP]]
- [[_COMMUNITY_Item Group|Item Group]]
- [[_COMMUNITY_Tabs|Tabs]]
- [[_COMMUNITY_Toggle Group|Toggle Group]]
- [[_COMMUNITY_Tooltip|Tooltip]]
- [[_COMMUNITY_PDF Text Extraction|PDF Text Extraction]]
- [[_COMMUNITY_PDF File Export|PDF File Export]]
- [[_COMMUNITY_Alert|Alert]]
- [[_COMMUNITY_Calendar|Calendar]]
- [[_COMMUNITY_Chart|Chart]]
- [[_COMMUNITY_Collapsible|Collapsible]]
- [[_COMMUNITY_Hover Card|Hover Card]]
- [[_COMMUNITY_Radio Group|Radio Group]]
- [[_COMMUNITY_Resizable|Resizable]]
- [[_COMMUNITY_Scroll Area|Scroll Area]]
- [[_COMMUNITY_Slider|Slider]]
- [[_COMMUNITY_App Router|App Router]]
- [[_COMMUNITY_Login Constants|Login Constants]]
- [[_COMMUNITY_Manus Dialog|Manus Dialog]]
- [[_COMMUNITY_Badge|Badge]]
- [[_COMMUNITY_Button Group|Button Group]]
- [[_COMMUNITY_Button|Button]]
- [[_COMMUNITY_Checkbox|Checkbox]]
- [[_COMMUNITY_Command|Command]]
- [[_COMMUNITY_Empty|Empty]]
- [[_COMMUNITY_Field|Field]]
- [[_COMMUNITY_Input Group|Input Group]]
- [[_COMMUNITY_Keyboard|Keyboard]]
- [[_COMMUNITY_Label|Label]]
- [[_COMMUNITY_Popover|Popover]]
- [[_COMMUNITY_Separator|Separator]]
- [[_COMMUNITY_Skeleton|Skeleton]]
- [[_COMMUNITY_Spinner|Spinner]]
- [[_COMMUNITY_Mobile Hook|Mobile Hook]]
- [[_COMMUNITY_Utils|Utils]]
- [[_COMMUNITY_Home Page|Home Page]]
- [[_COMMUNITY_Not Found Page|Not Found Page]]
- [[_COMMUNITY_Server Index|Server Index]]
- [[_COMMUNITY_Extract Runner|Extract Runner]]
- [[_COMMUNITY_Main Entry|Main Entry]]
- [[_COMMUNITY_Aspect Ratio|Aspect Ratio]]
- [[_COMMUNITY_Progress|Progress]]
- [[_COMMUNITY_Switch|Switch]]
- [[_COMMUNITY_Toggle|Toggle]]
- [[_COMMUNITY_Case Study Page|Case Study Page]]
- [[_COMMUNITY_Resume Page|Resume Page]]
- [[_COMMUNITY_Tailwind Config|Tailwind Config]]
- [[_COMMUNITY_Theme Config|Theme Config]]
- [[_COMMUNITY_Shared Constants|Shared Constants]]

## God Nodes (most connected - your core abstractions)
1. `installUiEventListeners()` - 5 edges
2. `logUiEvent()` - 4 edges
3. `ErrorBoundary` - 4 edges
4. `useFormField()` - 4 edges
5. `useComposition()` - 4 edges
6. `writeToLogFile()` - 3 edges
7. `sanitizeValue()` - 3 edges
8. `formatArg()` - 3 edges
9. `pruneBuffer()` - 3 edges
10. `elText()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `MapView()` --calls--> `usePersistFn()`  [INFERRED]
  client\src\components\Map.tsx → client\src\hooks\usePersistFn.ts
- `Input()` --calls--> `useDialogComposition()`  [INFERRED]
  client\src\components\ui\input.tsx → client\src\components\ui\dialog.tsx
- `Textarea()` --calls--> `useDialogComposition()`  [INFERRED]
  client\src\components\ui\textarea.tsx → client\src\components\ui\dialog.tsx
- `Input()` --calls--> `useComposition()`  [INFERRED]
  client\src\components\ui\input.tsx → client\src\hooks\useComposition.ts
- `Toaster()` --calls--> `useTheme()`  [INFERRED]
  client\src\components\ui\sonner.tsx → client\src\contexts\ThemeContext.tsx

## Communities

### Community 0 - "Dialog + Input + Map Combo"
Cohesion: 0.13
Nodes (6): useDialogComposition(), Input(), MapView(), Textarea(), useComposition(), usePersistFn()

### Community 1 - "Debug Collector"
Cohesion: 0.25
Nodes (13): compactText(), describeElement(), elText(), formatArg(), formatArgs(), getInputValueSafe(), installUiEventListeners(), isSensitiveField() (+5 more)

### Community 2 - "Dropdown Menu"
Cohesion: 0.18
Nodes (0): 

### Community 3 - "Menu Bar"
Cohesion: 0.22
Nodes (0): 

### Community 4 - "Alert Dialog"
Cohesion: 0.29
Nodes (0): 

### Community 5 - "Breadcrumb"
Cohesion: 0.29
Nodes (0): 

### Community 6 - "Navigation Menu"
Cohesion: 0.29
Nodes (0): 

### Community 7 - "Pagination"
Cohesion: 0.29
Nodes (0): 

### Community 8 - "Select"
Cohesion: 0.29
Nodes (0): 

### Community 9 - "Sidebar"
Cohesion: 0.33
Nodes (2): SidebarMenuButton(), useSidebar()

### Community 10 - "Form Controls"
Cohesion: 0.53
Nodes (4): FormControl(), FormDescription(), FormMessage(), useFormField()

### Community 11 - "Sheet Drawer"
Cohesion: 0.33
Nodes (0): 

### Community 12 - "Vite Config"
Cohesion: 0.6
Nodes (3): ensureLogDir(), trimLogFile(), writeToLogFile()

### Community 13 - "Error Boundary"
Cohesion: 0.4
Nodes (1): ErrorBoundary

### Community 14 - "Carousel"
Cohesion: 0.5
Nodes (2): CarouselNext(), useCarousel()

### Community 15 - "Context Menu"
Cohesion: 0.4
Nodes (0): 

### Community 16 - "Drawer"
Cohesion: 0.4
Nodes (0): 

### Community 17 - "Table"
Cohesion: 0.4
Nodes (0): 

### Community 18 - "Theme + Toaster"
Cohesion: 0.4
Nodes (2): Toaster(), useTheme()

### Community 19 - "Accordion"
Cohesion: 0.5
Nodes (0): 

### Community 20 - "Avatar"
Cohesion: 0.5
Nodes (0): 

### Community 21 - "Card"
Cohesion: 0.5
Nodes (0): 

### Community 22 - "Input OTP"
Cohesion: 0.5
Nodes (0): 

### Community 23 - "Item Group"
Cohesion: 0.5
Nodes (0): 

### Community 24 - "Tabs"
Cohesion: 0.5
Nodes (0): 

### Community 25 - "Toggle Group"
Cohesion: 0.5
Nodes (0): 

### Community 26 - "Tooltip"
Cohesion: 0.5
Nodes (0): 

### Community 27 - "PDF Text Extraction"
Cohesion: 0.67
Nodes (2): extract_all_text(), Extract all text from PDF safely

### Community 28 - "PDF File Export"
Cohesion: 0.67
Nodes (2): Extract all text from PDF and save to file, save_pdf_text()

### Community 29 - "Alert"
Cohesion: 0.67
Nodes (0): 

### Community 30 - "Calendar"
Cohesion: 0.67
Nodes (0): 

### Community 31 - "Chart"
Cohesion: 0.67
Nodes (0): 

### Community 32 - "Collapsible"
Cohesion: 0.67
Nodes (0): 

### Community 33 - "Hover Card"
Cohesion: 0.67
Nodes (0): 

### Community 34 - "Radio Group"
Cohesion: 0.67
Nodes (0): 

### Community 35 - "Resizable"
Cohesion: 0.67
Nodes (0): 

### Community 36 - "Scroll Area"
Cohesion: 0.67
Nodes (0): 

### Community 37 - "Slider"
Cohesion: 0.67
Nodes (0): 

### Community 38 - "App Router"
Cohesion: 1.0
Nodes (0): 

### Community 39 - "Login Constants"
Cohesion: 1.0
Nodes (0): 

### Community 40 - "Manus Dialog"
Cohesion: 1.0
Nodes (0): 

### Community 41 - "Badge"
Cohesion: 1.0
Nodes (0): 

### Community 42 - "Button Group"
Cohesion: 1.0
Nodes (0): 

### Community 43 - "Button"
Cohesion: 1.0
Nodes (0): 

### Community 44 - "Checkbox"
Cohesion: 1.0
Nodes (0): 

### Community 45 - "Command"
Cohesion: 1.0
Nodes (0): 

### Community 46 - "Empty"
Cohesion: 1.0
Nodes (0): 

### Community 47 - "Field"
Cohesion: 1.0
Nodes (0): 

### Community 48 - "Input Group"
Cohesion: 1.0
Nodes (0): 

### Community 49 - "Keyboard"
Cohesion: 1.0
Nodes (0): 

### Community 50 - "Label"
Cohesion: 1.0
Nodes (0): 

### Community 51 - "Popover"
Cohesion: 1.0
Nodes (0): 

### Community 52 - "Separator"
Cohesion: 1.0
Nodes (0): 

### Community 53 - "Skeleton"
Cohesion: 1.0
Nodes (0): 

### Community 54 - "Spinner"
Cohesion: 1.0
Nodes (0): 

### Community 55 - "Mobile Hook"
Cohesion: 1.0
Nodes (0): 

### Community 56 - "Utils"
Cohesion: 1.0
Nodes (0): 

### Community 57 - "Home Page"
Cohesion: 1.0
Nodes (0): 

### Community 58 - "Not Found Page"
Cohesion: 1.0
Nodes (0): 

### Community 59 - "Server Index"
Cohesion: 1.0
Nodes (0): 

### Community 60 - "Extract Runner"
Cohesion: 1.0
Nodes (0): 

### Community 61 - "Main Entry"
Cohesion: 1.0
Nodes (0): 

### Community 62 - "Aspect Ratio"
Cohesion: 1.0
Nodes (0): 

### Community 63 - "Progress"
Cohesion: 1.0
Nodes (0): 

### Community 64 - "Switch"
Cohesion: 1.0
Nodes (0): 

### Community 65 - "Toggle"
Cohesion: 1.0
Nodes (0): 

### Community 66 - "Case Study Page"
Cohesion: 1.0
Nodes (0): 

### Community 67 - "Resume Page"
Cohesion: 1.0
Nodes (0): 

### Community 68 - "Tailwind Config"
Cohesion: 1.0
Nodes (0): 

### Community 69 - "Theme Config"
Cohesion: 1.0
Nodes (0): 

### Community 70 - "Shared Constants"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **2 isolated node(s):** `Extract all text from PDF safely`, `Extract all text from PDF and save to file`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `App Router`** (2 nodes): `Router()`, `App.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Login Constants`** (2 nodes): `const.ts`, `getLoginUrl()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Manus Dialog`** (2 nodes): `ManusDialog.tsx`, `handleOpenChange()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Badge`** (2 nodes): `Badge()`, `badge.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Button Group`** (2 nodes): `ButtonGroup()`, `button-group.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Button`** (2 nodes): `cn()`, `button.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Checkbox`** (2 nodes): `Checkbox()`, `checkbox.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Command`** (2 nodes): `command.tsx`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Empty`** (2 nodes): `empty.tsx`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Field`** (2 nodes): `field.tsx`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Input Group`** (2 nodes): `input-group.tsx`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Keyboard`** (2 nodes): `kbd.tsx`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Label`** (2 nodes): `label.tsx`, `Label()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Popover`** (2 nodes): `popover.tsx`, `PopoverTrigger()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Separator`** (2 nodes): `separator.tsx`, `Separator()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Skeleton`** (2 nodes): `skeleton.tsx`, `Skeleton()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Spinner`** (2 nodes): `spinner.tsx`, `Spinner()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Mobile Hook`** (2 nodes): `useMobile.tsx`, `useIsMobile()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Utils`** (2 nodes): `utils.ts`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Home Page`** (2 nodes): `Home.tsx`, `Header()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Not Found Page`** (2 nodes): `NotFound.tsx`, `NotFound()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Server Index`** (2 nodes): `startServer()`, `index.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Extract Runner`** (1 nodes): `run_extract.py`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Main Entry`** (1 nodes): `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Aspect Ratio`** (1 nodes): `aspect-ratio.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Progress`** (1 nodes): `progress.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Switch`** (1 nodes): `switch.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Toggle`** (1 nodes): `toggle.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Case Study Page`** (1 nodes): `CaseStudy.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Resume Page`** (1 nodes): `Resume.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind Config`** (1 nodes): `jamiejchoi-com-tailwind.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Theme Config`** (1 nodes): `jamiejchoi-com-theme.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Shared Constants`** (1 nodes): `const.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Are the 3 inferred relationships involving `useComposition()` (e.g. with `Input()` and `Textarea()`) actually correct?**
  _`useComposition()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Extract all text from PDF safely`, `Extract all text from PDF and save to file` to the rest of the system?**
  _2 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dialog + Input + Map Combo` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._