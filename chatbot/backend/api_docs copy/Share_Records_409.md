
# Share Records

In Zoho CRM, we have different levels of data sharing. One of them is record-level data sharing, where the users can share individual records with other users in the organization. The records can be shared with or without the related lists.

#### Purpose

To get the details of a shared record.

#### Endpoints

[GET /{module\_api\_name}/{record\_id}/actions/share](https://www.zoho.com/crm/developer/docs/api/v7/get-shared-record-details.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/actions/share

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Cases, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, and Custom.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.share.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, cases, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, and custom.

#### Possible operation types

ALL - Full access to the record

READ - Get shared record's details

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/3652397000000649013/actions/share"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Contacts/3652397000000649013/actions/share"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Parameters

- sharedTostring, optional



Pass the current user’s ID to know the details like the ID and the module of the records shared with that user.

- viewstring, optional



Represents the details of the shared records that you want to retrieve. This parameter takes the value **summary**.


#### Sample Request with sharedTo parameter

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/3652397000000649013/actions/share?view=summary&sharedTo=4150868000001199001"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

**Note**

- The response differs based on the access permissions of the user with whom the record is shared. If the user already has full permission over the shared record via role, territory, data sharing, user-lookup field, the response will entail the "user" key representing the users with whom the record is shared.
- The result is sorted based on the following criteria in the order mentioned below:
  - The **order** in which the records are shared. For instance, if a record is shared to user A and then to user B, in the result, user B's details will be displayed first.
  - Whether the record is **shared alone or with related list**. The records that are shared alone have higher precedence.
  - The **permissions** given to the user. The order of precedence is from high to low, Full Access, Read-Write, Read-only.
  - The **time** at which the record was shared. The order of precedence is from oldest to latest.

#### Sample Response when the user gains access only via record-level sharing

``` json
Copied{
    "share": [\
        {\
            "shared_with": {\
                "name": “Jane Smith",\
                "id": "3652397000000281001",\
                "type": "users",\
                "zuid": "679952958"\
            },\
            "share_related_records": true,\
            "shared_through": {\
                "module": {\
                    "name": "Contacts",\
                    "id": "3652397000000002179"\
                },\
                "id": "3652397000000649013"\
            },\
            "permission": "full_access",\
            "type": "private"\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- OAUTH\_SCOPE\_MISMATCHHTTP 401



invalid oauth scope to access this URLe

**Resolution:** The client does not have the scope to ZohoCRM.share.{module\_name}.READ

(or)

The module name given in the URL is either Events, Calls, Tasks or any Linking module.

(or)

The module name given in the URL is invalid.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL has syntactical errors.

- INVALID\_DATAHTTP 400



ENTITY\_ID\_INVALID

**Resolution:** The record ID given in the URL is either invalid

(or)

does not belong to the module mentioned.

- INVALID\_DATAHTTP 400



Scheduler is running.

**Resolution:** The record is either being shared or revoked currently.

- INVALID\_MODULEHTTP 400



the module name given seems to be invalid

**Resolution:** The module name specified is incorrect. Refer to supported modules section above and specify a valid module API name.

- PATTERN\_NOT\_MATCHEDHTTP 400



Please check whether the input values are correct

**Resolution:** The value specified in 'view' parameter is incorrect. Refer to parameters section above and specify valid input.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read details of a shared record. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read.

**Resolution:** The user does not have the permission to read details of a shared record. Contact your system administrator.


#### Sample Response when the user already has full permission to access the record

``` json
Copied{
    "share": [\
        {\
            "shared_with": {\
                "name": “Jane Smith“,\
                "id": "3652397000000281001",\
                "type": "users",\
                "zuid": "679952958"\
            },\
            "share_related_records": true,\
            "shared_through": {\
                "module": {\
                    "name": "Contacts",\
                    "id": "3652397000000002179"\
                },\
                "name": "Patricia",\
                "id": "3652397000000649013"\
            },\
            "shared_time": "2022-03-01T11:25:28+05:30",\
            "permission": "full_access",\
            "shared_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017",\
                "zuid": "678521418"\
            },\
            "type": "private"\
        }\
    ]
}

```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-shared-record-details.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)