
import urllib.request
import ssl

# Create unverified context to avoid SSL errors in some environments
ssl._create_default_https_context = ssl._create_unverified_context

images = {
    "public/annadanam-seva-peetham.jpg": "https://images.unsplash.com/photo-1623864115144-8c88f349d799?q=80&w=1200&auto=format&fit=crop",
    "public/temple-maintenance-peetham.jpg": "https://images.unsplash.com/photo-1596735626079-05562723c347?q=80&w=1200&auto=format&fit=crop",
    "public/sri-chakra-maha-meru.jpg": "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1200&auto=format&fit=crop",
    "public/temple-timings-and-pooja-schedule.jpg": "https://images.unsplash.com/photo-1542385489-0fb4217150a0?q=80&w=1200&auto=format&fit=crop",
    "public/temple-etiquette-and-dress-code.jpg": "https://images.unsplash.com/photo-1678822003889-aa804c8f0fa3?q=80&w=1200&auto=format&fit=crop",
    "public/how-to-reach-courtallam-roads-and-buses.jpg": "https://images.unsplash.com/photo-1625126596987-a365cc475d5e?q=80&w=1200&auto=format&fit=crop"
}

opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36')]
urllib.request.install_opener(opener)

for path, url in images.items():
    try:
        print(f"Downloading {path}...")
        urllib.request.urlretrieve(url, path)
        print(f"Successfully saved {path}")
    except Exception as e:
        print(f"Error downloading {path}: {e}")
