---
title: "Rust Update 130"
description: "Rust Devblog 130"
lead: "This weeks update enables Double XP until the new component system is ready, w00t! It looks like the new update video format is here to stay for now, so we will be including them in our weekly Rust Update posts."
date: 2016-10-06
lastmod: 2016-10-06
draft: false
weight: 50
images: ["devblog-130.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
- Video Update
---

{{< img-simple src="devblog-130.jpg" alt="Square" class="border-0 rounded-circle" >}}

This weeks update enables Double XP until the new component system is ready, w00t! It looks like the new update video format is here to stay for now, so we will be including them in our weekly Rust Update posts. This week also includes several new items on the pre-release branch including a Recycler item and the Component System. There are a ton of graphics and performance fixes in this patch as usual. This week also includes an exploit fix so that only 5.56 ammo can be placed into a turret's storage container, and some stricter checks on flying hacks and jumping hacks. Burn in hell you cheating savages.

## Video Update
<iframe width="669" height="402" src="https://www.youtube.com/embed/6C-WOu-_BVo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Changelog 130
```
Optimized entity name building on pooled entities
Added pooling to player collision, model and name tag objects (eliminates stuttering)
Optimized runtime player model LOD assignment (eliminates stuttering)
Optimized player model frame updates (better performance with many visible players)
Warmup player animators when they switch to enabled (snap to correct animation state)
Netgraph can only be used by admins and developer (exploit)
Improved lighthouse placement checks (always keeps some distance from the beach)
Improved smaller procedural maps by adding geographical features from bigger maps
Fixed rubber banding at the outer edges of certain tunnels and sewers
Added collider_capacity and renderer_capacity batching convars
Made fly hack and jump hack detection a fair amount stricter
Added the finished lighthouse 
Replaced some of the greyboxed industrial props with textured versions
Guitar viewmodel
Guitar worldmodel & LODS
Guitar worldmodel now drops instead of burlap sack
Fixed water-related DX9 half screen darkening/brightening issues across all gpu models
Fixed DX9 broken motion blur on AMD R9 and potentially other models
Fixed DX9 broken water reflections on AMD R9 and vpotentially other models
Underground sections of the game now use Environment Volumes
Removed all traces of old bone armor
Autoturret can only hold 5.56 ammo instead of other item types
Doubled XP earn rates
```
_Source: https://playrust.com/devblog-130/_