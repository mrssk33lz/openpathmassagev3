---
title: "Rust Update 133"
description: "Rust Devblog 133"
lead: "This weeks update is pretty light on the Live build, but has some cool updates added to the Pre-release branch and some teasers on upcoming content additions."
date: 2016-10-27
lastmod: 2016-10-27
draft: false
weight: 50
images: ["devblog-133.jpg"]
contributors: ["Rust Blog"]
tags:
- Rust Updates
- Devblog
- Changelog
- Video Update
---
{{< img-simple src="devblog-133.jpg" alt="Square" class="border-0 rounded-circle" >}}

This weeks update is pretty light on the Live build, but has some cool updates added to the Pre-release branch and some teasers on upcoming content additions.

To start off, the devs have finalized what items will require components and have updated them all on the Pre-release Branch. So, if you don't like the component system or are interested in it, head over and opt-in for the Pre-release branch to check it out. Next, there are some cool new concepts in the works for Harbor Rad Towns. You can see some screenshots from this on the Rust Devblog. We also have some cool updates to reload animations coming for pistols and the Bolt Action Rifle. You can see some videos of the animations on the Rust DevBlog. Pistols should deploy fast enough now that it will be faster to switch to a pistol rather than reload. This should add to the gunplay enhancements they have been going for over the past few months. Additional sounds have been added for many of the deployables in-game now. There is also a final teaser of the new Hazmat Suit Facemask. It looks much different, but more realistic I guess. Hopefully they will leave the old suit in as a skin! The rest of this weeks updates can be found in the Changelog below.

For server owners, there has been a big memory leak fixed, which should help servers be able to stay online longer with larger entity counts hopefully.

## Video Update
<iframe width="669" height="402" src="https://www.youtube.com/embed/RfFwWZDEMso" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Changelog 132
```
Environment volumes now eliminate ambient light when underground
Eliminated UI canvas overhead from grass displacement camera
Converted some component getters to pooled lists (less GC)
Stripped deployable component from entity instances (reduced memory usage)
Removed client missing gib warning when not running in dev mode
Removed server building privilege warning when not running in dev mode
Muzzle Brake has less of a aimcone penalty
Fixed skin lighting related issues
Added opacity anti-aliasing to grass when TSSAA is enabled
Improved LR300 iron sights
All Pistols have drastically reduced draw time
Improved bolt action animations
Added map worldmodel + LODS
Now drops map model
Planner/map player anims
```
_Source: https://playrust.com/devblog-133/_