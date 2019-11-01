

# Building Instructions


1. Run

```bash
npm run build
```

2. In xavier project folder look for the builded files in

```
xavier/build
```

## Testing with preview server

To test the built xavier run:

```bash
npm run preview
```

There is a option called HOST, which allows to you run in a local network serve. This is useful to test in mobile devices.

To disable modifiy the `package.json` preview script:

Localhost:

```json
{
  "preview": "node -r esm ./config/preview_server.js",
}
```

Local network: (tested only in Windows)

```json
{
  "preview": "node -r esm ./config/preview_server.js --HOST=local",
}
```