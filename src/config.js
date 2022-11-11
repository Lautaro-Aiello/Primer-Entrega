module.exports  = {
    fileSystem: {
        path: "./DB"
    },
    mongodb: {
        urlStr: "mongodb://localhost/ecommerce",
        options: {
            useNewUrlParse: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000

        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "ecommerce-backend-9a60b",
        "private_key_id": "057629a4ba5400aa92626eb7ef826eb1d2859894",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDAdWBXK0xmEQcN\nWHyXwviev+NPMAxjz6zSQfA2UjtiinI/Q/JVFMQCtd7RGpLGTHoxYwzQFdVOsYgn\nSFwiWzkf2e1iqqXHBnNIrVm/EygUlB/n5HWZlWNtG9fSs5CP6mNst/6g7O8NbNZQ\nkDfmKDFYyN/O8JTm5ixBYpxtqSg5+4iNwb4d0pQXXJr9ZyUW+CJFIUoE6VwXu00w\nWjJQGJYbC5pvHcLWVgsl2FRyezDE2wxKbpQf+RUBsY/0HjocAFD+KNXs71VKweta\nX5/oFNSk0YREz4klMhiui3tRhrzfxUM3p8pVhxpYFQgpRaIEymCY18Ua1hsCIhuj\nCgJKtCIRAgMBAAECggEABi9oqN2olPm7QoDlueROSQxh1UhRh+deyySCEplr0CmQ\ndj/ns+5vs6ZP9NG1vSYsNAOxshROH3IbCXC6iUvXYDctZvVwUAzKO9bsq6tOlRfe\nccakNS+ZiOtcXvHL+jeAjBNs3Uq0oO5331sY5oVWBKjy3rKihUxSSH/z4lTpCNWr\nbRLESRotqSXKr5VXvy2nyoDPnE0X+rdwd+I6JbQ6GJwwcrvhIyL8Rz93HhDC7ChN\ntpHIpPF0aFnW0RU6KrSgirZhxRMq5ZJLpMaEuc349osEWbdTzXEBcY95biG/451c\nNPAh4LEkze0CRSm8SmZo2YJ4ivsHY33uoPAMQyqe+QKBgQDmI4VV86b0u4lfXpMv\n+cVjsIsqnpNFsO4j7fygXAyHviIWX7FaAOJfzFgE+HT4rCLhDTBCavCVE3YdnGyc\nphONTOKIGHTstJ88RAKRiTyWGJ3sNLxLgeLBuNTeZKnJAuoQuWnpYIr2CpE449Z2\nS38w1/u/b/LDAS6tCT9FnWJb5QKBgQDWFeUce+5kf/tc7iZnLnpql0G2j+ojhEtu\nx0tyjQtTOH354apTi0klxyYP7k46NRlII5SXFys4D2+lsjaow4oBSIMUJ0Z8dvqt\nmlMLvnoBc7Zu0DUohGZnYLNJ+96S01HCl40jzVUjqRq8dEoJJSY5TfFqlzBkqMQD\nyYDC3fyCvQKBgQDTJQPQOBuVrfn7ZenkumQ/clo8YAD+j7XtgQumlM1qPSdJH8K3\nsNgAzJp09P9cp5HYqSD9zt+r5o8X28xKbJTDryandsjP42e1AzDYFfFgRHWfoUKg\nhCpnUgz7fZ/IrMPTVEm3tLvJwSg76c15+wpW5dIzcaJpB0yrtTA3zo3PgQKBgQCd\nZ/fO26hKKHduuoNt9hR37sKYMnRarNixmML2dJHRHIYzhiKvzod3yVdI+1R1I7l0\n+wQzmwth6qeSUtgxeaQskV4fIUmIFgr2PbO1vNUD4EpQa7HKGp8Yf1cTnKbnmYxR\n4RAbNMvWrm1EBtSwqKnUFGTelE82k4ebqTqNDJ6umQKBgQDFkS/tMrK3dAwoNMPH\nhI864+x4FkbG+DQdJ82DnUjohe7y/tEs9C39lcmUwj5AkSgufBRfIGQX0miMF1Ez\nDVqB2D6Mo3ezhICwOPAEilqO+CUTKDHUAaFtXj+aBvOmCrXuUbj4o5EJAzkUMTO9\n68c2TwhDJ6DeuTMa5PhFNV/d1Q==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-w9abv@ecommerce-backend-9a60b.iam.gserviceaccount.com",
        "client_id": "113370600705177988373",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-w9abv%40ecommerce-backend-9a60b.iam.gserviceaccount.com"  
    }
}