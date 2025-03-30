
# Get Territories of a Record

#### Purpose

To get the details of the territories assigned to a record.

#### Endpoints

[GET /{module\_api\_name}/{record\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-territories-of-a-record.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}

#### Supported modules

Leads, Accounts, Contacts, and Deals

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, and deals

#### Possible operation types

ALL - Full access to the record

READ - Read records in the module

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Deals/554023000000497035"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X GET
```

#### Response JSON Keys

- Namestring



Represents the name of the territory.

- idstring



Represents the unique ID of the territory.

- $assigned\_byJSON object



Represents the name and ID of the user who assigned the territory to the record.

- $assigned\_timestring



Represents the date and time at which the territory was assigned to the record.

- $assignedstring



Represents the how the territory was assigned to the record. The possible values are:



- **manually:** the user has assigned the territory through the API or the UI, manually.
- **automatically:** the system has assigned the territories.

#### Possible Errors

- OAUTH\_SCOPE\_MISMATCHHTTP 401



invalid oauth scope to access this URL

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read records

**Resolution:** The user does not have permission to read records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to update records

**Resolution:** The user does not have the permission to update records. Contact your system administrator.


#### Sample Response

``` json
Copied{
  "data": [\
    {\
      "Owner": {\
        "name": "Patricia Boyle",\
        "id": "111111000000043376",\
        "email": "p.boyle@abc.com"\
      },\
      "Territories": [\
        {\
          "Name": "Texas",\
          "id": "111111000000046898",\
          "$assigned_by": null,\
          "$assigned_time": "2020-03-05T16:07:28+05:30",\
          "$assigned": "automatically"\
        },\
        {\
          "Name": "South",\
          "id": "111111000000046458",\
          "$assigned_by": {\
            "name": "Patricia Boyle",\
            "id": "111111000000043376"\
          },\
          "$assigned_time": "2020-03-05T16:07:28+05:30",\
          "$assigned": "manually"\
        }\
      ]\
    }\
  ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-territories-of-a-record.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)