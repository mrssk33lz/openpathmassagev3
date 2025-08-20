---
title: "Rust Update 136"
description: "Rust Devblog 136"
lead: "This weeks patch brings with it a bunch of bug fixes and some changes to hydration. There are also a handful of items that cost less to craft."
date: 2016-11-17
lastmod: 2016-11-17
draft: false
weight: 50
images: ["devblog-136.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
- Video Update
---
{{< img-simple src="devblog-136.jpg" alt="Square" class="border-0 rounded-circle" >}}

This weeks patch brings with it a bunch of bug fixes and some changes to hydration. There are also a handful of items that cost less to craft.

- Codelock no longer requires 400 wood.
- Crossbow requires far fewer components.
- Bota bag is cheaper.
- Water purifier is cheaper.
- Revolver is cheaper.

One of the most notable fixes in this patch is the lighting on the furnaces. They now only light a small area in front of them. w00t!

Check out these changes, some more teasers of the harbor update, and the rest of Devblog 136 on the Rust Devblog.

## Video Update
You can also checkout this weeks Video Update to wrap up things better than we probably can in this short post.

<iframe width="669" height="402" src="https://www.youtube.com/embed/9m5mK4ftzmQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Changelog 136
```
Improved bullet flyby playback
Fixed occlusion weirdness on a few sounds
Fixed a few weapons playing 3rd person reload sounds on deploy
Tiny bit of misc sound polish
Reduced stuttering near bases
Added Water Bottle viewmodel
Removed ability to menu-drink from bota bag/water bottle
Revolver refire rate increased
Revolver aimcone increased
Revolver damage decreased very slightly
Combat log includes timestamp
Fixed some issues with pool.mode set to 2
Set pool.mode to 2 by default
Shelves can no longer be placed on deployables
Pumpkins can no longer be stacked
Made projectile anti hack stricter
Fixed rendering layers on some trees
Fixed client side socket handles sometimes not being destroyed
Fixed a small client side coroutine memory leak
Added pooling support to client side lock entities
Optimized player model and name tag scripts
Made debug.ambientvolumes dev-only (potential exploit)
```
_Source: https://playrust.com/devblog-136/_