---
title: "Rust Update 129"
description: "Rust Devblog 129"
lead: "This weeks update includes a cool new format for this weeks update summary in video format by Shadowfrax and some fixes."
date: 2016-09-29
lastmod: 2016-09-29
draft: false
weight: 50
images: ["devblog-129.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
- Video Update
---

{{< img-simple src="devblog-129.jpg" alt="Square" class="border-0 rounded-circle" >}}

This weeks update includes a cool new format for this weeks update summary in video format.

## Video Update
<iframe width="669" height="402" src="https://www.youtube.com/embed/sXGIuChSlbU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

For those who like to read about the updates, there isn't really much to read about other than what is in the Changelog below. The main idea of this update is fixes and optimizations. The thing that stuck out the most to me in this update is that Stone Gate gibs are now stones instead of logs. There was also a fix for R9 based video cards where the screen was half-darkened.

## Changelog 129
```
Fixed AMD R9 half-screen darkening
Fixed tree lighting desaturation
Fixed viewport resize breaking water when reflections are enabled
Removed building blocked chat message when trying to build while building blocked
Optimized terrain carving triggers significantly (better projectile and culling perf)
Optimized various small inefficiencies in prefab pooling and the LOD grid
Optimized client side network update events to reduce entity streaming stuttering
Eliminated needless string reallocation from object creation (better perf, less GC)
Eliminated some minor dynamic memory allocations (less GC)
Added log when server is fully started (helpful for server problem diagnosis)
Added refresh_stability console command (helpful for debugging)
Stone gate gibs are no longer the incorrect wood gate ones
```
_Source: https://playrust.com/devblog-129/_