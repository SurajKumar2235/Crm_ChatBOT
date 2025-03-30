
# Create Bulk Read job (Bulk Export)

#### Purpose

To create a bulk read job to export records.

#### Endpoints

[POST /read](https://www.zoho.com/crm/developer/docs/api/v7/bulk-read/create-job.html)

### Request Details

#### Request URL

{api-domain}/crm/bulk/{version}/read

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.bulk.read

(and)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, price books, quotes, sales orders, purchase orders, invoices, and custom

#### Possible operation types

ALL - Full access to the record

READ - Get bulk read job

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/bulk/v7/read"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-H "Content-Type: application/json"
-d "@inputData.json"
```

#### Request JSON

- callbackJSON Object, optional



The JSON object represents the following details of a bulk read job.



- **url**(string)-

A valid URL, that should allow HTTP Post method. The Bulk Read Job's details is posted to this URL on successful completion of job or on failure of job.
- **method**(string)-

The HTTP method of the callback url. The supported value is **post**.

- queryJSON Object, optional



Represents the JSON object that holds the keys and their value that form the criteria for bulk export. The following are the keys in the JSON object:



- **module**(JSON object, mandatory)-

Represents the API Name of the module you want to export the records from. For instance, Leads. Specify the module name as "Events" if you want to export the records in the Events module as an ICS file.

- file\_type(string, mandatory when you want to export the events as an ICS file)



Specify the value for this key as "ics" to export all records in the Events module as an ICS file.


#### Sample Input to fetch all the records in a module

``` json
Copied{
    "callback": {
        "url": "https://www.example.com/callback",
        "method": "post"
    },
    "query": {
        "module": {
            "api_name": "Events"
        }
    },
    "file_type": "ics"
}
```

This query fetches all the records in the Events module in the ICS format.

#### Sample input to fetch the next set of records using the "page\_token" key

``` json
Copied{
    "query": {
        "page_token": "a4d1c8ff7a770500e0483a7bc4b3a40a7160"
    }
}
```

If there are more than **200,000** records to export in your Bulk Read API call, use the " **page\_token"** key to fetch the next set of records. You can retrieve the value for the " **page\_token"** key from the " **next\_page\_token"** key in the response of your first [Get the Status of the Bulk Read Job API](https://www.zoho.com/crm/developer/docs/api/v7/bulk-read/job-details.html).

#### To fetch records with criteria

- **cvid**(string, mandatory) -

Represents the unique ID of the custom view when you want to export records in a custom view. You can obtain the cvid from the [Custom View Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/custom-view-meta.html).
- **fields**(JSON array, optional) -

Represents the API name of the fields that you want to export. For instance, First\_Name, Last\_Name, Email, Owner.last\_name, and so on. Do not input this key when you want to export the records in the Events module as an ICS file.
- **page**(integer, optional) -

The default value is 1 and means that the first 200,000 records matching your query will get exported. If you want to fetch the records from the range 200,001 to 400,000, then mention the value as '2'.
- **page\_token**(string, optional)

The token used to fetch the next page of results. You can use the " **page**" key to fetch up to 200,000 records without "page\_token". To fetch more than 200,000 records, you must include the " **page\_token**" key in the request body. This key takes the value from the key " **next\_page\_token**" in the response of the first [Get the Status of the Bulk Read Job API](https://www.zoho.com/crm/developer/docs/api/v7/bulk-read/job-details.html).
  - Notes :
    - This token value is user-specific. If you use another user's token, the system throws an error.
    - The page token will be active for a maximum of 24 hours.
- **criteria**(JSON object, optional) -

Represents the details that the system uses to filter records.Ex: The API Name of a module or field, comparators used to add two or more criteria, a group which the record/module/field belongs to etc. the following are the keys of this JSON object:
  - **group\_operator**(string, mandatory if api\_name, comparator and value are not specified) -

    Represents the Logical operators. **Supported values** \- and, or.
  - **group**(JSON array, mandatory if api\_name, comparator and value are not specified) -

    Represents the array of criteria objects. Each object in the criteria has the following keys:
    - **field**(JSON object, mandatory if group and group\_operator are not specified)-

      The keys in this JSON object represents the API name of a field to be compared. For instance: First\_Name, Last\_Name, Owner.last\_name etc.
    - **value**(string/JSON array, mandatory if group and group\_operator are not specified)-

      Here in this example the key is given as a part of "group" JSON array. You can also specify it directly inside the criteria JSON object. The key represents the value with which the records must be filtered.
    - **comparator**(string, mandatory if group and group\_operator are not specified.)-

      Here in this example the key is given as a part of "group" JSON array. You can also specify it directly inside the criteria JSON object. The key represents the comparator. Example: equal, greater\_than. The following table shows the supported comparators.

#### Sample Input to fetch records with a single criterion

``` json
Copied{
    "query": {
        "module": {
            "api_name": "Contacts"
        },
        "fields": [\
            "Last_Name",\
            "Owner",\
            "Owner.last_name",\
            "Account_Name.Account_Name",\
            "Account_Name.Phone",\
            "Lead_Source",\
            "Created_Time"\
        ],
        "criteria": {
            "field": {
                "api_name": "Last_Name"
            },
            "comparator": "equal",
            "value": "Boyle"
        }
    }
}
```

This query fetches records based on the specified criteria and the "."(dot) operator is used to fetch data from the parent modules. Account\_Name is the default lookup field in the Contacts module. Here, Owner.last\_name returns the last name of the owner of the contact, Account\_Name returns the ID and Account\_Name.Account\_Name returns the name of the account associated with the contact, and Account\_Name.Phone returns the phone number of the account associated with the contact.

##### Allowed Comparators

| Data type | Comparator | Value and limits |
| --- | --- | --- |
| Number(Integer)/Decimal/BigInteger/ Currency/Percent | equal, not\_equal, in, not\_in, less\_than, less\_equal, greater\_than, greater\_equal | Any number values or ${EMPTY} for an empty value. Not more than 19 digits for big integer, decimal values for decimal and currency fields. In multi-currency enabled accounts, only the home currency value is supported. |
| Text (Email, Phone, URL, Picklist, Multi-select, etc) | equal, not\_equal, in, not\_in, contains, not\_contains, starts\_with, ends\_with | Any text values or ${EMPTY} for empty value. Not more than 255 characters. |
| Date and DateTime | equal, not\_equal, in, not\_in, between, not\_between, greater\_than, greater\_equal, less\_than, less\_equal | Any date values in the ISO 8601 format or ${EMPTY} for an empty value. For DateTime fields, milliseconds is not supported. |
| Boolean | equal | True or false. |
| Lookup | equal, not\_equal, in, not\_in | Big integer value of the lookup, ${EMPTY} for empty value, or use the .(dot) operator to establish a relation between two modules. Example: "Owner" fetches the ID of the Owner, whereas "Owner.last\_name" fetches the last name of the owner. "Account\_Name" fetches the ID of the Account associated with the base module, whereas "Account\_Name.Phone" fetches the phone number of the account associated with the base module. |

#### Sample Input to fetch records with multiple criteria and CVID

``` json
Copied{
  "callback": {
    "url": "https://www.example.com/callback",
    "method": "post"
  },
  "query": {
    "module": {
      "api_name": "Leads"
    },
    "cvid": "5725767000000087501",
    "fields": [\
      "Last_Name",\
      "Owner",\
      "Owner.last_name",\
      "$converted",\
      "Lead_Source",\
      "Lead_Status",\
      "Company",\
      "Email",\
      "Mobile",\
      "Created_Time"\
    ],
    "criteria": {
      "group": [\
        {\
          "field": {\
            "api_name": "Last_Name"\
          },\
          "comparator": "equal",\
          "value": "Patricia"\
        },\
        {\
          "field": {\
            "api_name": "Email"\
          },\
          "comparator": "equal",\
          "value": "patricia.b@zylker.com"\
        },\
        {\
          "comparator": "between",\
          "field": {\
            "api_name": "Modified_Time"\
          },\
          "value": [\
            "2021-02-22T15:39:26+05:30",\
            "2021-07-20T09:00:00+05:30"\
          ]\
        }\
      ],
      "group_operator": "and"
    }
  }
}
```

Show full

Show less

#### Response Structure

- statusstring



Specifies the status of the API call. Sample - "status": "success".

- messagestring



Specifies the pre-defined comments for the job. Useful in case any errors occur. Sample - "message": "Added successfully."

- detailsJSON object



Contains the following details of the bulk read job.



- **operation**(string)-

Specifies the type of action the API completed. Sample - "operation" : "read”.
- **created\_by**(JSON object)-

Specifies the ID and Name of the user who initiated the bulk read job. Sample - "created\_by": { "id": "1000000031045", "name": "Patricia Boyle" }.
- **created\_time**(string)-

Specifies the created time of the bulk read job.
- **state**(string)-

Specifies the current status of the bulk read job. Example: "state": "ADDED" or "IN PROGRESS" or "COMPLETED".
- **id**(string)-

Specifies the unique identifier of the bulk read job. Use this ID to check the job status and download the result. Sample - "id": "1000010760002".

#### Sample response

``` json
Copied{
  "data": [\
    {\
      "status": "success",\
      "code": "ADDED_SUCCESSFULLY",\
      "message": "Added successfully.",\
      "details": {\
        "id": "5725767000000859031",\
        "operation": "read",\
        "state": "ADDED",\
        "created_by": {\
          "id": "5725767000000411001",\
          "name": "Patricia Boyle"\
        },\
        "created_time": "2021-07-25T02:13:17-07:00"\
      }\
    }\
  ],
  "info": {}
}
```

**Note**

- A maximum of two hundred thousand records can be exported in a single export job. i.e, "page" would be "1" and the records in the page would be "200,000". To know more about the Bulk API limits, go [here](https://www.zoho.com/crm/developer/docs/api/v7/bulk-read/limitations.html).
- The first 200,000 records matching the criteria are taken for export if the value of the "page" is "1".
- To fetch data from parent modules, use the "."(dot) operator. For example, Contacts module has the default Account\_Name lookup field. To fetch the name of the account that the contact is associated with, use Contacts.Account\_Name.Account\_Name.
- Use only API names of fields and modules in the input.
- If the "fields" attribute in the query JSON is left empty, all the fields available for the corresponding base module are listed in the CSV file. In case you need only specific fields, specify the field API names for export.
- It is mandatory to specify the cvid if you want to export records under a custom view.
- Along with cvid, you can also specify additional criteria. These criteria will be appended with the existing criteria for the custom/standard view.

**For ICS file type**

- Exporting records in ICS format is supported only for the Meetings module.
- You can export a maximum of 20,000 records from the Meetings module per batch.
- The "fields" attribute is not supported when you want to export the meetings as an ICS file.
- If you do not specify "file\_type" as "ics", the records will be exported in the CSV format, by default.
- If the value of more\_records is "true" in the response of the Get Job Details API call, there are more records to be fetched.

#### Sample callback for job completed

``` json
Copied{
    "data": [\
        {\
            "id": "4150868000004716016",\
            "operation": "read",\
            "state": "COMPLETED",\
            "result": {\
                "page": 1,\
                "per_page": 200000,\
                "count": 127,\
                "download_url": "/crm/bulk/v7/read/4150868000004716016/result",\
                "more_records": false\
            },\
            "query": {\
                "module": {\
                    "id": "4150868000000002175",\
                    "api_name": "Leads"\
                },\
                "page": 1\
            },\
            "created_by": {\
                "id": "4150868000000225013",\
                "name": "Patricia Boyle"\
            },\
            "created_time": "2021-07-25T02:13:17-07:00",\
            "file_type": "csv"\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- MEDIA\_TYPE\_NOT\_SUPPORTEDHTTP 415



Media type is not supported.

**Resolution:** You have not passed the 'Content-Type' header along with the request.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.bulk.read or ZohoCRM.modules.{module\_name}.READ. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read.

**Resolution:** The user does not have the permission to read records. Contact your system administrator.


#### Sample callback for job failed

``` json
Copied{
    "data": [\
        {\
            "id": "111111000000052009",\
            "operation": "read",\
            "state": "FAILURE",\
            "result": {\
                "error_message": {\
                    "status": "error",\
                    "code": "INTERNAL_SERVER_ERROR",\
                    "message": "Internal server error occurred.",\
                    "details": {}\
                }\
            },\
            "query": {\
                "fields": [\
                    "Last_Name",\
                    "Owner",\
                    "Owner.last_name",\
                    "$converted",\
                    "Lead_Source",\
                    "Lead_Status",\
                    "Company",\
                    "Email",\
                    "Mobile",\
                    "Created_Time"\
                ],\
                "module": {\
                    "id": "111111000000000042",\
                    "api_name": "Leads"\
                },\
                "criteria": {\
                    "field": {\
                        "id": "111111000000000952",\
                        "api_name": "Owner.last_name"\
                    },\
                    "comparator": "equal",\
                    "value": "Patricia Boyle"\
                },\
                "page": 1\
            },\
            "created_by": {\
                "id": "111111000000046207",\
                "name": "Patricia Boyle"\
            },\
            "created_time": "2021-02-23T13:36:53+05:30",\
            "file_type": "csv"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/bulk-read/create-job.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)