
# Get Recycle Bin Records

#### Purpose

To fetch the records in the Recycle Bin in your CRM account. You can fetch upto 200 records in a single API call.

#### Endpoints

[GET /settings/recycle\_bin](https://www.zoho.com/crm/developer/docs/api/v7/get-recycle-bin.html)

[GET /settings/recycle\_bin/{record\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-recycle-bin.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/recycle\_bin

**To fetch a specific record by id:**

{api-domain}/crm/{version}/settings/recycle\_bin/{record\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope= ZohoCRM.settings.recycle\_bin.READ

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/recycle_bin?filters=%7B%22group_operator%22%3A%22AND%22%2C%22group%22%3A%5B%7B%22field%22%3A%7B%22api_name%22%3A%22display_name%22%7D%2C%22comparator%22%3A%22contains%22%2C%22value%22%3A%22John%22%7D%2C%7B%22field%22%3A%7B%22api_name%22%3A%22module%22%7D%2C%22comparator%22%3A%22equal%22%2C%22value%22%3A%22Leads%22%7D%5D%7D"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

##### Parameters

- sort\_bystring, optional



To sort the available list of records based on the given field.

**Possible values**: display\_name, deleted\_time, deleted\_by

**Default value**: deleted\_time

- sort\_orderstring, optional



To sort the available list of records in either ascending or descending order.

**Possible values**: **asc** \- ascending order, **desc** \- descending order.

**Default value**: desc

- idsstring, optional



To retrieve specific records based on their unique ID.

**Possible values:** Valid unique IDs of records. Example: 4150868000001944196

- pageinteger



To get the list of records from the respective pages.

**Possible values**: Positive integer values only.

**Default value**: 1

- per\_pageinteger



To get the list of records available per page. The maximum possible value is **200**.

**Possible values**: Positive integer values only.

**Default value**: 200

- filtersJSON object, optional



To specify conditions for retrieving records from the recycle bin, using logical operators and comparators to filter by fields such as display name, module, deleted by, and deleted time.



**Note** :  Make sure to encode the filters parameter value before making the API call.



**JSON keys in** _**filters**_ **param:**



- group\_operator string, optional



Defines how multiple conditions are combined. The only supported group\_operator is **AND**.

- groupJSON array, mandatory



An array of filter conditions, where each condition specifies the field, comparator and value.



  - fieldJSON object



    Represents the field by which the records should be filtered. Refer to the [Filter Attributes](https://www.zoho.com/crm/developer/docs/api/v7/get-recycle-bin.html#filter_att) section to know the possible values.

  - comparatorstring



    Represents the comparator operator, such as equal, not\_equal, contains, etc. Refer to the [Filter Attributes](https://www.zoho.com/crm/developer/docs/api/v7/get-recycle-bin.html#filter_att) section to know the possible values for each field.

  - valuestring/JSON object



    Represents the value to compare the field against. This can be a string or a JSON object, depending on the field. Refer to the sample section on the right for more details.

**Filter Attributes:**

- display\_name



The display name of the record. The **conditions** that can be applied for **display\_name** are **equal, not\_equal, contains, not\_contains, starts\_with**, and **ends\_with**.

- module



The API name of the module. Records from this module in the recycle bin will be fetched. The **conditions** that can be applied for **module** are **equal** and **not\_equal**

- deleted\_by



The name of the user who deleted the record. The **conditions** that can be applied for **deleted\_by** are **equal, not\_equal, contains, not\_contains, starts\_with,** and **ends\_with**.

- deleted\_time



The date and time the record was deleted, in _ISO 8601 DateTime_ format. The **conditions** that can be applied for **deleted\_time** are **equal, not\_equal, greater\_than,** and **less\_than**.


**Note**

- When you include the **record id in the URL**, it takes the **highest precedence** over **ids** and **filters** parameters. If the _record id_ is included in the URL, any _filters_ or _ids_ parameters will be ignored.
- The **ids** parameter has **precedence** over the **filters** parameter. If both _ids_ and _filters_ are included, only the _ids_ parameter will be considered.
- You can retrieve up to **200 records** in a single API call.  If there are more than 200 records in the Recycle Bin, use the **page** parameter to retrieve them.
-  The **more\_records** key in the response will be set to **true** if there are more records available, beyond what was returned in the current response. In that case, use the **page** parameter to retrieve them in batches.

#### Sample filter parameter value

``` json
Copied{
  "group_operator": "AND",
  "group": [\
    {\
      "field": {\
        "api_name": "display_name"\
      },\
      "comparator": "contains",\
      "value": "Zane"\
    },\
    {\
      "field": {\
        "api_name": "module"\
      },\
      "comparator": "equal",\
      "value": "Contacts"\
    },\
    {\
      "field": {\
        "api_name": "deleted_by"\
      },\
      "comparator": "equal",\
      "value": [\
        {\
          "id": "111111000000050305",\
          "name": "Patricia Boyle"\
        }\
      ]\
    },\
    {\
      "field": {\
        "api_name": "deleted_time"\
      },\
      "comparator": "greater_than",\
      "value": "2022-12-01T01:00:00+05:30"\
    }\
  ]
}
```

#### Response JSON Keys

- ownerJSON object



The owner details of the record. This includes the name and the id of the owner.

- moduleJSON object



The details of the parent module of the deleted record.

- deleted\_byJSON object



The details of the user who deleted the record.

- idstring



The unique id of the record.

- display\_namestring



The display name of the record.

- deleted\_timestring



The deleted time of the record.


**Note**

- You will receive a **No Content (204)** response in the following cases:
  - The Recycle Bin is empty.
  - An invalid record ID is specified.
  - The record is not in the Recycle Bin.

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have the required OAUTH SCOPE. Create a new client with valid scope. Refer to scope section above for more details.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- INVALID\_DATAHTTP 403

  - The given group operator not supported. Only 'AND' operator is supported

    **Resolution:** Construct the **filters** parameter value with **AND** group operator.

  - The given api\_name seems to be invalid

    **Resolution:** Specify valid api names for the fields in the **filters** parameter.

#### Sample Response

``` json
Copied{
    "recycle_bin": [\
        {\
            "owner": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "module": {\
                "api_name": "Leads",\
                "id": "4876876000000002175"\
            },\
            "deleted_by": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001"\
            },\
            "id": "4876876000007018006",\
            "display_name": "John Doe",\
            "deleted_time": "2024-07-23T15:37:52+05:30"\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 1,
        "page": 1,
        "more_records": false
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-recycle-bin.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)