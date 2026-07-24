# EH Auto Repair

Static website for [eh-autorepair.com](https://eh-autorepair.com) — premium auto body & paint services.

## Stack

- HTML, CSS, JavaScript (no build step)
- Hosted on **GitHub Pages** from the `main` branch root

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## GitHub Pages

1. Repo Settings → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / folder: `/ (root)`
4. Custom domain: `eh-autorepair.com` (this repo includes a `CNAME` file)

### DNS (at your domain registrar)

| Type | Name | Value |
|------|------|--------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `vargevorgyan.github.io` |

After DNS propagates, enable **Enforce HTTPS** in Pages settings.

## QR code

Print-ready QR (links to `https://eh-autorepair.com`, logo centered):

`assets/eh-autorepair-qr.png`
