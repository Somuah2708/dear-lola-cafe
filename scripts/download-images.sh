#!/bin/bash
# Download beautiful stock images from Unsplash for the Theia Coffee House website
# Uses Unsplash Source API which provides free, direct image URLs

cd "$(dirname "$0")/../public"

echo "Downloading placeholder images from Unsplash..."

# Hero fallback
curl -sL "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop&q=80" -o images/hero-fallback.jpg &

# Experience - café interior
curl -sL "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=1000&fit=crop&q=80" -o images/experience.jpg &

# About - coffee barista
curl -sL "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&h=1000&fit=crop&q=80" -o images/about.jpg &

# Community - people in café
curl -sL "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=1000&fit=crop&q=80" -o images/community.jpg &

wait
echo "Main images done."

# Menu images
curl -sL "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=400&fit=crop&q=80" -o images/menu/espresso.jpg &
curl -sL "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop&q=80" -o images/menu/cortado.jpg &
curl -sL "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&h=400&fit=crop&q=80" -o images/menu/flat-white.jpg &
curl -sL "https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=400&h=400&fit=crop&q=80" -o images/menu/pour-over.jpg &
curl -sL "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop&q=80" -o images/menu/iced-latte.jpg &
curl -sL "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&h=400&fit=crop&q=80" -o images/menu/matcha.jpg &

wait
echo "Coffee menu done."

curl -sL "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=400&fit=crop&q=80" -o images/menu/avocado-toast.jpg &
curl -sL "https://images.unsplash.com/photo-1608039829572-453e3e2b0242?w=400&h=400&fit=crop&q=80" -o images/menu/eggs-benedict.jpg &
curl -sL "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=400&fit=crop&q=80" -o images/menu/acai-bowl.jpg &
curl -sL "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=400&fit=crop&q=80" -o images/menu/french-toast.jpg &

curl -sL "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=400&h=400&fit=crop&q=80" -o images/menu/croissant.jpg &
curl -sL "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=400&fit=crop&q=80" -o images/menu/pain-chocolat.jpg &
curl -sL "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&h=400&fit=crop&q=80" -o images/menu/cinnamon-roll.jpg &
curl -sL "https://images.unsplash.com/photo-1585023298317-9ef3e8eef283?w=400&h=400&fit=crop&q=80" -o images/menu/banana-bread.jpg &

wait
echo "Brunch & pastries done."

curl -sL "https://images.unsplash.com/photo-1608032077018-c9aad9565d29?w=400&h=400&fit=crop&q=80" -o images/menu/caprese.jpg &
curl -sL "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop&q=80" -o images/menu/chicken-wrap.jpg &
curl -sL "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop&q=80" -o images/menu/soup.jpg &

curl -sL "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop&q=80" -o images/menu/tiramisu.jpg &
curl -sL "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&q=80" -o images/menu/fondant.jpg &
curl -sL "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=400&fit=crop&q=80" -o images/menu/cheesecake.jpg &

wait
echo "Menu images done."

# Gallery
curl -sL "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=800&fit=crop&q=80" -o images/gallery/coffee-1.jpg &
curl -sL "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&h=800&fit=crop&q=80" -o images/gallery/interior-1.jpg &
curl -sL "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=800&h=800&fit=crop&q=80" -o images/gallery/pastry-1.jpg &
curl -sL "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&h=800&fit=crop&q=80" -o images/gallery/brunch-1.jpg &
curl -sL "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&h=800&fit=crop&q=80" -o images/gallery/coffee-2.jpg &
curl -sL "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&h=800&fit=crop&q=80" -o images/gallery/interior-2.jpg &
curl -sL "https://images.unsplash.com/photo-1486427944544-d2c246c4df14?w=800&h=800&fit=crop&q=80" -o images/gallery/pastry-2.jpg &
curl -sL "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=800&fit=crop&q=80" -o images/gallery/brunch-2.jpg &

wait
echo "Gallery images done."

# Instagram
curl -sL "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=600&fit=crop&q=80" -o images/instagram/ig-1.jpg &
curl -sL "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&h=600&fit=crop&q=80" -o images/instagram/ig-2.jpg &
curl -sL "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600&h=600&fit=crop&q=80" -o images/instagram/ig-3.jpg &
curl -sL "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=600&fit=crop&q=80" -o images/instagram/ig-4.jpg &
curl -sL "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&h=600&fit=crop&q=80" -o images/instagram/ig-5.jpg &
curl -sL "https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=600&h=600&fit=crop&q=80" -o images/instagram/ig-6.jpg &

wait
echo "All images downloaded successfully!"
