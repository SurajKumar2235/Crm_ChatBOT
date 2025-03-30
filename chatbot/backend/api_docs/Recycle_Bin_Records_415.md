
# Delete Recycle Bin Records

#### Purpose

To delete one or more records from the Recycle Bin in your CRM account.

#### Endpoints

[DELETE /settings/recycle\_bin/{record\_id}](https://www.zoho.com/crm/developer/docs/api/v7/del-recycle-bin-records.html)

[DELETE /settings/recycle\_bin?ids={record\_id1,record\_id2,...}](https://www.zoho.com/crm/developer/docs/api/v7/del-recycle-bin-records.html)

[DELETE /settings/recycle\_bin?filters={filter\_value}](https://www.zoho.com/crm/developer/docs/api/v7/del-recycle-bin-records.html)

### Request Details

#### Request URL

**To delete a specific record by id:**

{api-domain}/crm/{version}/settings/recycle\_bin/{record\_id}

**To delete a list of records:**

{api-domain}/crm/{version}/settings/recycle\_bin?ids={record\_id1, record\_id2, record\_id3,...}

**To delete records based on filters param:**

{api-domain}/crm/{version}/settings/recycle\_bin?filters={filter\_value}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope= ZohoCRM.settings.recycle\_bin.DELETE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/recycle_bin?ids=4876876000003274910,4876876000003278075,4876876000003280538"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

**Note**

- When you delete a record from the Recycle Bin, all its associated records in the Recycle Bin will also be deleted. For example, when a Leads record is deleted, its associated Notes and Attachments will also be removed from the Recycle Bin. In such cases, if there are more than 1000 records (including the parent record), a delete job will be scheduled.

##### Parameters

- idsstring, optional



To delete specific records based on their unique ID. You can specify up to 100 records IDs to be deleted.

**Possible values:** Valid unique IDs of records, in comma separated format. Example: 4150868000001944196,487687600000327055

- filtersJSON object, optional



To delete records that meet the defined criterion, using logical operators and comparators to filter by fields such as display name, module, deleted by, and deleted time.



**Note** :  Make sure to encode the _filters_ parameter value before making the API call.



**JSON keys in** _**filters**_ **param:**



- group\_operator string, optional



Defines how to combine the multiple conditions defined in the _group_ array.

**Possible Value:** **AND**

- groupJSON array, mandatory



An array of filter conditions, where each condition specifies the field, comparator and value.



  - fieldJSON object



    Represents the field by which the records should be filtered. Refer to the [Filter Attributes](https://www.zoho.com/crm/developer/docs/api/v7/del-recycle-bin-records.html#filter_att) section to know the possible values.

  - comparatorstring



    Represents the comparator operator, such as equal, not\_equal, contains, etc. Refer to the [Filter Attributes](https://www.zoho.com/crm/developer/docs/api/v7/del-recycle-bin-records.html#filter_att) section to know the possible values for each field.

  - valuestring/JSON object



    Represents the value to compare the field against. This can be a string or a JSON object, depending on the field. Refer to the sample section on the right for more details.

**Filter Attributes:**

- display\_name



The display name of the record. The **conditions** that can be applied for **display\_name** are **equal, not\_equal, contains, not\_contains, starts\_with**, and **ends\_with**.

- module



The API name of the module. Records from this module in the recycle bin will be filtered for deletion. The **conditions** that can be applied for **module** are **equal** and **not\_equal**

- deleted\_by



The name of the user who deleted the record. The **conditions** that can be applied for **deleted\_by** are **equal, not\_equal, contains, not\_contains, starts\_with,** and **ends\_with**.

- deleted\_time



The date and time the record was deleted, in _ISO 8601 DateTime_ format. The **conditions** that can be applied for **deleted\_time** are **equal, not\_equal, greater\_than,** and **less\_than**.


**Note**

When you use the **filters** parameter to delete records based on defined criteria, the process is asynchronous, and a delete job will be scheduled.

#### Sample Response

``` json
Copied{
    "recycle_bin": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4876876000003274910"\
            },\
            "message": "record deleted",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4876876000003278075"\
            },\
            "message": "record deleted",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "4876876000003280538"\
            },\
            "message": "record deleted",\
            "status": "success"\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_DATAHTTP 400



The id given seems to be invalid.

**Resolution:** Specify valid record ID.

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

#### Sample Request using filters param

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/recycle_bin?filters=%7B%22group_operator%22%3A%22AND%22%2C%22group%22%3A%5B%7B%22field%22%3A%7B%22api_name%22%3A%22display_name%22%7D%2C%22comparator%22%3A%22contains%22%2C%22value%22%3A%22Paul%22%7D%2C%7B%22field%22%3A%7B%22api_name%22%3A%22module%22%7D%2C%22comparator%22%3A%22equal%22%2C%22value%22%3A%22Leads%22%7D%5D%7D"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "recycle_bin": [\
        {\
            "code": "SCHEDULED",\
            "details": {},\
            "message": "Bulk deletion of records based on filters has been scheduled",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/del-recycle-bin-records.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)