# Load Git Config

> Loads the resolved git configuration; not just the file.

## Usage

```node
var loadConfig = require("load-git-config");

loadConfig(function (error, config) {
  if (error) {
    console.error("I literally couldn't even", error);
  } else {
    ZhuLi.doTheThing(config);
  }
});
```

* [Zhu Li][]

## Example Config

```json
{
  "color": {
    "ui": "true"
  },
  "commit": {
    "template": "~/.gittemplate"
  },
  "core": {
    "excludesfile": "~/.gitignore",
    "autocrlf": "input",
    "safecrlf": "false",
    "repositoryformatversion": "0",
    "filemode": "true",
    "bare": "false",
    "logallrefupdates": "true",
    "ignorecase": "true",
    "precomposeunicode": "true"
  },
  "mergetool": {
    "keepbackup": "true"
  },
  "push": {
    "default": "current"
  },
  "include": {
    "path": [
      "~/.gitconfig_os",
      "~/.gitconfig_local",
      "~/.gitaliases",
      "~/.gitaliases_local"
    ]
  },
  "credential": {
    "helper": "osxkeychain"
  },
  "user": {
    "email": "zhu.li@avatar.local",
    "name": "Zhu Li"
  },
  "alias": {
    "br": "branch",
    "ci": "commit",
    "co": "checkout",
    "st": "status"
  }
}
```

[Zhu Li]: http://www.imdb.com/character/ch0478122/
