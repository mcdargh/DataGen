# DataGen

DataGen is a random data generator meant to be useful to populate a development database. This need is driving by the need to have working data for developers which doesn't come from a production db.

## Config

Configuration is done via a json file which defines a set of tables, the columns in the tables (data types, size, etc.) and the relationships between tables

{
    "name": "Financial DB Spec",
    "gen": {
        "tables": [
            {
                "name": "A",
                "num": 500,
                "columns": [
                    {
                        "name": "account",
                        "spec": "guid"
                    },
                    {
                        "name": "status",
                        "spec": "int64",
                        "min": 0,
                        "max": 100
                    }
                ]
            },
            {
                "name": "B",
                "num": 500,
                "columns": [
                    {
                        "name": "whatsit",
                        "spec": "alphanum",
                        "length": 50
                    },
                    {
                        "name": "hash",
                        "spec": "hex",
                        "length": 32
                    },
                    {
                        "name": "entries",
                        "spec": "int64",
                        "min": 0,
                        "max": 100
                    },
                    {
                        "name": "accounts",
                        "spec": "int64",
                        "min": 0,
                        "max": 100
                    }
                ]
            }
        ]
    }
}
