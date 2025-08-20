---
title: "Rust Update 114"
description: "Rust Devblog 114"
lead: "This week's update is fairly uneventful on the client side, with some fixes to graphics and mostly server side components and hack detections. Nothing else to see here. Move it along. Hoping for more info on the upcoming experience update next week!"
date: 2016-06-09
lastmod: 2016-06-09
draft: false
weight: 50
images: ["devblog-114.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
---
{{< img-simple src="devblog-114.jpg" alt="Square" class="border-0 rounded-circle" >}}

This week's update is fairly uneventful on the client side, with some fixes to graphics and mostly server side components and hack detections. Nothing else to see here. Move it along. Hoping for more info on the upcoming experience update next week!

## Changelog 114
```
Hapis/Savas Maintenance update and bug fixes
Fixed large scale occlusion (graphics.lso) not working in some cases
Fixed various false positives with flyhack_protection set to 2
Changed the flyhack_protection default value to 2
Added server side melee attack verification (distances, line of sight)
Added lag compensation to server side projectile firing rate
Changed decay.scale convar to affect both delay and duration
Added decay to more deployables
Opening storage containers resets decay on them
Doors only reset decay on building blocks that belong to the same building
```
_Source: https://playrust.com/devblog-114/_