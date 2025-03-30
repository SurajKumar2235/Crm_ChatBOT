
# Unblock Email Address API

In certain scenarios, a mail you sent gets bounced in Zoho CRM due to reasons such as invalid email address, full mailbox, blocked domain, email server down, large email, and so on.

There are two types of bounces:

1. **Soft Bounces** \- An email cannot be delivered to a recipient's email address temporarily.

Example: Email Server is down.
2. **Hard Bounces** \- An email id permanently undeliverable.

Example: Invalid email address.

You can now unblock the **soft bounced emails** using **Unblock Email API.**

For more details, refer to this [link](https://help.zoho.com/portal/en/kb/crm/connect-with-customers/email/email-capabilities/articles/dealing-with-bounce-warnings#Avoiding_email_bounces) to know more about email bounce management in Zoho CRM.

#### Purpose

To unblock the soft bounced emails.

#### Endpoints

[POST /{module\_api\_name}/{record\_id}/actions/unblock\_email](https://www.zoho.com/crm/developer/docs/api/v7/unblock-emails.html)

[POST /{module\_api\_name}/actions/unblock\_email](https://www.zoho.com/crm/developer/docs/api/v7/unblock-emails.html)

### Request Details

#### Request URLs

**To unblock emails in a single record:**

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/actions/unblock\_email

**To unblock emails from multiple records:**

{api-domain}/crm/{version}/{module\_api\_name}/actions/unblock\_email

#### Supported Modules

Leads, Contacts, Deals, Accounts, Sales Orders, Purchase Orders, Invoices, Quotes, Cases, and Custom.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.send\_mail.{module\_name}.CREATE

#### Possible Module Names

leads, accounts, contacts, deals, quotes, salesorders, purchaseorders, invoices, cases, and custom

#### Possible Operation Types

CREATE - Perform unblock email actions

#### Input JSON

- unblock\_fieldsarray of strings, mandatory



To unblock emails, specify one or both of the system-defined fields : **Email** and **Secondary\_Email**

- idsarray of strings, mandatory _if you do not specify the id in the request URL_



To unblock emails for more than one record, specify the record IDs. You can specify up to 500 record IDs.


**Notes**

- The permanently blocked emails cannot be unblocked.
- A temporarily blocked email can be unblocked up to **5 times**.
- A **custom email field** cannot be unblocked.
- You cannot merge records that are **locked** or in an **Approval Process/Review Process**.

#### Sample request to unblock emails associated with a single record

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/2423488000000483001/actions/unblock_email"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
-X POST

```

#### Sample Input

``` json
Copied{
    "unblock_fields": [\
        "Email",\
        "Secondary_Email"\
    ]
}
```

#### Possible Errors

- NOT\_ALLOWEDHTTP 400



unknown field provided

**Resolution:** You have specified unknown fields. Please specify the supported fields, i.e., **Emails** and/or **Secondary\_Email**.

- INVALID\_DATAHTTP 400



Invalid record provided

**Resolution:** You have specified one or more invalid record IDs. Please specify valid record IDs.

- NOT\_ALLOWEDHTTP 400



EMAIL, SECONDARY\_EMAIL field not available for module

**Resolution:** The provided fields are not available in the specified module. Please specify a valid field.

- NOT\_ALLOWEDHTTP 400



Cannot unblock, email has been unblocked 5 times already

**Resolution:** You cannot unblock the same email more than 5 times.

- NOT\_ALLOWEDHTTP 400



Cannot unblock, Email is blocked permanently

**Resolution:** You can unblock a temporarily blocked email, but not a permanently blocked email.

- NOT\_ALLOWEDHTTP 400



Email is already unblocked

**Resolution:** The provided email is already unblocked.

- MANDATORY\_NOT\_FOUNDHTTP 400



required field not found

**Resolution:** The input body cannot be empty. Please provide the required fields to unblock emails.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name.

Specify a valid module name.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have **ZohoCRM.modules.{module\_name}.UPDATE** scope.

Create a new token with valid scope. Refer to scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "2423488000000569001"\
            },\
            "message": "Unblocked successfully",\
            "status": "success"\
        }\
    ]
}
```

#### Sample Request to unblock bulk emails

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/actions/unblock_email"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
-X POST

```

#### Sample Input

``` json
Copied{
    "unblock_fields": [\
        "Email",\
        "Secondary_Email"\
    ],
    "ids": [\
        "2423488000000575001",\
        "2423488000000569124",\
        "2423488000000569119"\
\
    ]
}
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "2423488000000575001"\
            },\
            "message": "Unblocked successfully",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "2423488000000569124"\
            },\
            "message": "Unblocked successfully",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "2423488000000569119"\
            },\
            "message": "Unblocked successfully",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/unblock-emails.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)