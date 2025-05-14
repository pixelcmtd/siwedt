# `siwedt`

siwedt is a tool for packaging websites for distribution. It automatically
transpiles and minifies JavaScript/TypeScript, HTML and CSS.

> [!WARNING]
> Please only use this tool for code that you somewhat trust. The HTML minifier
> currently used has [a known DoS vulnerability](https://github.com/advisories/GHSA-pfq8-rq6v-vf5m)
> and none of the siwedt code has been audited with security in mind.

## Usage

```sh
siwedt [options] [input-dir]
```

- `-c`/`--config`: Specify the config file, defaults to `[input-dir]/.siwedtrc`
- `-C`/`--inline-config`: Inline configuration (see below, overrides the config file)
- `-V`/`--verbose`: Print all processed files
- `-v`/`--version`: Display version information
- `-h`/`--help`/`-H`: Display help message

### Configuration

Configuration is done in the `.siwedtrc` file in the root directory of the
website or inline using the `-C`/`--inline-config` option.

```json
{
    "browserlist": "defaults to empty, see <https://github.com/browserslist/browserslist>, only used for babel",
    "outdir": "defaults to dist"
}
```
