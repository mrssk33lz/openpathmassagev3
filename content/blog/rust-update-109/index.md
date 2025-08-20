---
title: "Rust Update 109"
description: "Rust Devblog 109"
lead: "Rust Update 109 has brought a ton of polishing and fixes, along with a totally new look for the power plant and a new craftable item, the fish trap. The fish trap is used to catch different types of fish to eat. It's the first try at integrating fishing into Rust outside of plugins."
date: 2016-05-05
lastmod: 2016-05-05
draft: false
weight: 50
images: ["dungeons_art_054.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---

{{< img-simple src="dungeons_art_054.jpg" alt="Square" class="border-0 rounded-circle" >}}

Rust Update 109 has brought a ton of polishing and fixes, along with a totally new look for the power plant and a new craftable item, the fish trap. The fish trap is used to catch different types of fish to eat. It's the first try at integrating fishing into Rust outside of plugins. Currently I'm finding it a little buggy to cook the gutted fish, but I'm sure that will be ironed out in a patch. Overall it's a fun item to use so far. This update also raises some of the item stack levels, but we have many of those raised on Rustocalypse already, so they won't be noticeable on the server. Read the full changelog below.

## Changelog 109
```
Lots of audio polish & mix tweaks
New footsteps w/ more variations per surface type
More bow & crossbow attack sound variations
Bear/wolf footsteps are audible from farther away
Fixed movement being faster when walking diagonally
Fixed metal facemasks not always protecting against headshots
Procedural Map: Dungeon updates
Procedural Map: New powerline meshes
Procedural Map: New mountain types
Procedural Map: More distance between huge mountains
Procedural Map: Reduced water wave clipping
Procedural Map: More aggressive altitude based snow
Procedural Map: Snow patches of various sizes in the far north
Procedural Map: Micro cliffs can no longer spawn on roads
Procedural Map: Wild pumpkins and corn spawn more reliably
Procedural Map: Mushrooms spawn inside forests on ground patches with no grass
Procedural Map: Overall mushroom, pumpkin and corn populations are higher
Procedural Map: Airfield walls no longer float slightly above ground
Procedural Map: Fixed rivers sometimes intersecting with dungeon sewer systems
Procedural Map: Loading time optimizations (mostly cliff and monument placement)
Procedural Map: Reduced overall bush and clutter rock density slightly
Procedural Map: Tweaked the size of driftwood spawn patches
Procedural Map: World size is now clamped between 1000 and 6000
Many food items now stack to 10
556 stacks to 100
Charcoal stacks to 1000
Fixed helicopter gibs being destroyed by fire
Human meat reduces hydration
Added new Waterbarrel art
Reactive target cost reduction
Reactive target automatically resets after 6 seconds of being knocked down
Added Fish Trap
Added various fish meat and constituent products
```
_Source: https://playrust.com/devblog-109/_