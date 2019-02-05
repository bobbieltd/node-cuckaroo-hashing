{
    "targets": [
        {
            "target_name": "cuckaroo-hashing",
            "sources": [
                "cuckaroo.cc",
                "src/blake2b-ref.c"
            ],
            "include_dirs": [
                "src",
                "<!(node -e \"require('nan')\")"
            ]
        }
    ]
}
