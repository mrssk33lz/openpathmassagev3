---
title: "Rust Update 128"
description: "Rust Devblog 128"
lead: "This weeks update mainly adds a bunch of fixes for graphics and performance which you can read more about in the Changelog. It does however give some pretty awesome teasers on the Rust Blog about upcoming changes in the works, some of which are pretty major changes. There has also been a change to how the building blocked message displays which will deter players from using it as a way to determine where cupboards are during raids."
date: 2016-09-22
lastmod: 2016-09-22
draft: false
weight: 50
images: ["devblog-128.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---

{{< img-simple src="devblog-128.jpg" alt="Square" class="border-0 rounded-circle" >}}

This weeks update mainly adds a bunch of fixes for graphics and performance which you can read more about in the Changelog below. It does however give some pretty awesome teasers on the Rust Blog about upcoming changes in the works, some of which are pretty major changes. There has also been a change to how the building blocked message displays which will deter players from using it as a way to determine where cupboards are during raids.

This weeks patch introduces us to the idea of a new component system that will ultimately replace the newish XP system. The idea behind the Rust Component System would be that certain items, components, would be required to craft in-game items. This is in line with other crafting systems in other games. Here are some of the components they have in mind so far:

- Metal Pipe
- Rope
- Gears
- Glue
- Duct Tape
- Disinfectant
- Tech Parts (circuit boards etc)
- Battery
- Tarp
- Nails
- Screws

They are also talking about changing other aspects of the game such as:

- Everything craftable by default
- Loot-only components required for crafting
- New players spawn only in the south of the map
- Radiation:
  -- Stronger fields the farther north you move
  -- Radiation slowing movement when unprotected
  -- Clothing protects against radiation
  -- Radsuit required for very high radiation levels
- Loot-only components with higher tech tiers spawn further North.
- Rebalance all resource gathering to be more in line with Legacy.

This week also continues to tease the upcoming caves revamp and shows off a new Hazmat Suit design in the works.

## Changelog 128
```
Added new grass displacement option (experimental, disabled by default)
Made revive line of sight check more forgiving (easier to hold)
Building blocked message is only shown when in building mode or holding a hammer
Building privilege is also checked at the construction placement position
Fixed server side player rotation getting corrupted from sleeping bags on slopes
Fixed a situation where building privilege would randomly be incorrect
Optimized terrain carving tests slightly
Fixed surface dimensions mismatch error when resizing window
Fixed crash when switching servers
Fixed DX9 white player preview
Fixed water system performance on riverless maps
Added contact shadows to view model when ambient occlusion is enabled
Terrain Quality no longer affects shader lod; use Shader Level instead
```
_Source: https://playrust.com/devblog-128/_