
# Get Emails of a Record

#### Purpose

Emails are introduced as a related list in Leads, Contacts, Deals, Accounts, Quotes, Invoices, Sales Orders, and Purchase Orders. Use this API to get the details of the emails sent from a record in any of these modules. This API returns **ten emails per API call.**

#### Endpoints

[GET /{module\_api\_name}/{record\_id}/Emails](https://www.zoho.com/crm/developer/docs/api/v7/get-email-rel-list.html)

[GET /{module\_api\_name}/{record\_id}/Emails/{message\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-email-rel-list.html)

### Request Details

#### Request URL

**To fetch all emails** \- {api\_domain}/crm/{version}/{module\_api\_name}/{record\_id}/Emails

**To fetch a specific email** \- {api\_domain}/crm/{version}/{module\_api\_name}/{record\_id}/Emails/{message-id}

#### Supported modules

Leads, Accounts, Contacts, Deals, Quotes, Invoices, Sales Orders, Purchase Orders, and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.READ

or

scope=ZohoCRM.modules.{module\_name}.READ

and

scope=ZohoCRM.modules.emails.READ

#### Possible Module Names

leads, accounts, contacts, deals, quotes, invoices, salesorders, purchaseorders, and custom

#### Parameters

- typestring, optional



Note that when you do not specify any of these parameters, you will receive all emails from the users and the ones sent from CRM in the response.

If the user has not configured email, the response will only contain the scheduled and sent emails from CRM.



- **sent\_from\_crm** \- Emails sent from CRM and associated with given record.
- **scheduled\_in\_crm** \- Emails scheduled to be sent from CRM.
- **drafts** \- List of all emails that are in draft state.
- **user\_emails** \- To fetch your emails or the shared user's emails, which are synced via IMAP/POP protocol using email integration.
- **For the Accounts module, when :**
  - **all\_contacts\_sent\_crm\_emails** \- Emails sent from CRM to contacts.
  - **all\_contacts\_scheduled\_crm\_emails** \- Emails that are scheduled to be sent from CRM to contacts.
  - **all\_contacts\_draft\_crm\_emails** \- Draft mails of all contacts associated with an account.

- owner\_idinteger, optional



The ID of the user whose emails you want to fetch. Note that you can use this parameter only with **type=user\_emails**.

- indexstring, optional



Each API returns the first ten emails, and the response contains the key "next\_index". Use this value for "index" in subsequent calls to fetch other emails.


**Note**

When you fetch a specific email, the **content** key in the response represents the body of the email. Please note that you can fetch the email body only when fetching the specific email, and not all the emails of the record.

#### Sample request to fetch all emails of a record

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/3652397000002379001/Emails"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "Emails": [\
        {\
            "cc": null,\
            "has_thread_attachment": false,\
            "summary": null,\
            "owner": {\
                "name": "Patricia Boyle",\
                "id": "2313985000000470001"\
            },\
            "read": true,\
            "subject": "test with attachment"",\
            "message_id": "f1605986931c500d26ac22b396077e87736b40ac35a094851466f1918966b2e703ad757140074c63cd7cc78b5140ed45",\
            "has_attachment": false,\
            "source": "individual",\
            "sent": true,\
            "intent": null,\
            "sentiment_info": null,\
            "linked_record": null,\
            "related_to_record": null,\
            "emotion": null,\
            "from": {\
                "user_name": "Patricia Boyle",\
                "email": "p.boyle@abc.com"\
            },\
            "to": [\
                {\
                    "user_name": "Mr. Christopher Maclead",\
                    "email": "christopher-maclead@noemail.com"\
                },\
                {\
                    "user_name": "christopher-maclead",\
                    "email": "christopher-maclead@34523.com"\
                }\
            ],\
            "time": "2023-12-06T11:55:16+05:30",\
            "status": [\
                {\
                    "type": "sent"\
                }\
            ]\
        },\
        {\
            "cc": null,\
            "has_thread_attachment": false,\
            "summary": null,\
            "owner": {\
                "name": "Patricia",\
                "id": "2313985000000470001"\
            },\
            "read": true,\
            "subject": "test with attachment"",\
            "message_id": "2e10816e80281e1db9f94dfcd85ed1a46a935fd85d98ce1f7491f85ae8db6edb038a290bff25780610d61f6748b12925",\
            "has_attachment": false,\
            "source": "individual",\
            "sent": true,\
            "intent": null,\
            "sentiment_info": null,\
            "linked_record": null,\
            "related_to_record": null,\
            "emotion": null,\
            "from": {\
                "user_name": "Patricia Boyle",\
                "email": "p.boyle@abc.com"\
            },\
            "to": [\
                {\
                    "user_name": "John Smith",\
                    "email": "smith.j@gmail.com"\
                }\
            ],\
            "time": "2023-10-30T11:19:42+05:30",\
            "status": [\
                {\
                    "bounced_time": "2023-11-03T08:10:58+05:30",\
                    "sub_category": "Temporary Domain Failure",\
                    "bounced_reason": "Retries Exhausted. Host not reachable.",\
                    "type": "bounced",\
                    "category": "Temporarily blocked"\
                }\
            ]\
        },\
        {\
            ...\
        }\
    ],
    "info": {
        "per_page": 10,
        "next_index": "487a357e145f0949daec41facb432a1e667349598e57461a6f16f38e3ba444231c01809c86faabb8ce0d9236a16fe897",
        "count": 10,
        "prev_index": "0",
        "more_records": true
    }
}
```

Show full

Show less

#### Possible Errors

- CANNOT\_PROCESSHTTP 400



Reasons and resolutions:



- The search function that is used to get emails list is temporarily unavailable. Try the API after some time.
- The configured mailbox of the current user is deleted. Reconfigure the email.
- The POP user's mailbox is deleted and needs to be backed up. If the current user is an admin, they can initiate a backup.
- The user is deactivated in Zoho Mail. Remove the user.
- IMAP is configured for the mailbox and sync is in process or yet to be initiated. Wait for the sync to complete before fetching the emails related to the record.
- you have setup Gmail API and the authentication failed. Reconfigure the Gmail API.

Refer to the "details" key in the response for the exact error and rectify it accordingly.

- INVALID\_DATAHTTP 400



The record ID is invalid.

**Resolution:** Specify a valid ID of the lead, deal, contact, or account in the request URL.

- INVALID\_DATAHTTP 400



The value for the "type" parameter is invalid.

**Resolution:** Specify a valid value for the parameters. Refer to the "Parameters" section for the possible values.

- NO\_PERMISSIONHTTP 403



you do not have permission to view emails for this record in this module.

**Resolution:** Contact your administrator.


#### Sample request to fetch a specific email of the record

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/3652397000002379001/Emails/2cceafa194d037b63f2000181dd818641afa5a84d184e888e618598ebe137c9d"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "Emails": [\
        {\
            "attachments": [\
                {\
                    "size": "24792",\
                    "name": "email_templates.png",\
                    "id": "72daf06xxx349c51ce66"\
                }\
            ],\
            "subject": "test with attachment",\
            "editable": false,\
            "mail_format": "html",\
            "intent": "purchase",\
            "content": "<div style=\"word-wrap: break-word; word-break: break-word; font-family: Verdana, arial, Helvetica, sans-serif; font-size: 13px\"><div><font face=\"Verdana, Geneva, sans-serif\"><br />\ntest with attachment<br />\n<br />\n</font><br />\n<span id=\"ecw_signature\"></span></div></div>",\
            "sentiment_info": "positive",\
            "sent_time": "2022-12-06T04:51:14+05:30",\
            "thread_id": "12343212343",\
            "emotion": "gratitude",\
            "reply_to": {\
                "user_name": null,\
                "email": ""\
            },\
            "from": {\
                "user_name": "Patricia Boyle",\
                    "email": "p.boyle@abc.com"\
            },\
            "to": [\
                {\
                    "user_name": "John Smith",\
                    "email": "smith.j@gmail.com"\
                }\
            ],\
            "status": [\
                {\
                    "first_open": "2022-12-06T06:23:38+05:30",\
                    "count": "1",\
                    "type": "opened",\
                    "last_open": "2022-12-06T06:23:38+05:30"\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-email-rel-list.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)