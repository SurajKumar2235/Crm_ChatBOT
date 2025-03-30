
# Services APIs

The services module holds the data of all the services like wall painting, house keeping, car and bike services, AC repair, etc., that are offered in your company. Services APIs help you to create new services, retrieve or search service records, update service details and delete existing services. They also help you to configure service preferences based on various business needs.

### Get Services

#### Purpose

To get services data that match your search criteria.

#### Endpoints

[GET /Services\_\_s](https://www.zoho.com/crm/developer/docs/api/v7/get-services.html)

[GET /Services\_\_s/{service\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-services.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/Services\_\_s

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.services.{operation\_type}

#### Possible operation types

ALL - Full access to services data

READ - Get services data

##### Parameters

- fieldsstring, mandatory when fetching all services data



To list all the services data with respect to the fields that you specify in this parameter. Note that you can include a maximum of 50 field API names in this parameter. The [GET Fields API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) will give you the existing field API names in the Services module.

**Possible values**: Multiple field API names, comma separated. For example: Last\_Name,Email.

- cvidlong, optional



To get the list of appointments present in a custom view that you specify in this key. You can get the custom view ID from the [GET Custom Views API](https://www.zoho.com/crm/developer/docs/api/v7/custom-view-meta.html). You cannot use this param with the "sort\_by" param.

**Possible values**: {custom\_view\_id}.

- page\_tokenstring, mandatory to fetch more than 2000 services by pagination



You can use the "page" param to fetch up to 2000 services without "page\_token". To fetch more than 2000 services, you must include the "page\_token" param in the request. This param takes the value from the key "next\_page\_token" in the response of the first GET Services call. This token value is user-specific and if you use another user's token, the system will throw an error.

The page token is bound to parameters and expires in 24 hours. Also, you cannot use this param with the "page" param.

- pageinteger, optional



To get the list of services from the respective pages. Default value is **1**. Note that you cannot use this param with the "page\_token" param.

**Possible values**: Positive integer values only.

- per\_pageinteger, optional



To get the list of services available per page. The default and the maximum possible value is **200**.

**Possible values**: Positive integer values only.

- sort\_orderstring, optional



To sort the available list of services in either ascending or descending order.

**Possible values**: **asc** \- ascending order, **desc** \- descending order. The default value is 'desc'.

- sort\_bystring, optional



To sort the services based on the fields **id**, **Created\_Time**, and **Modified\_Time**. The default value is 'id'. Note that you cannot use this param with the "cvid" param.


**Note**

- **sort\_order** applies to given **sort\_by** field.
- If your requirement is to fetch under 2000 services, use the "page" and "per\_page" parameters (page=1 to 10, per\_page=200).
- If you want to paginate for more than 2000 services, use the "page\_token" parameter you receive in the first response. You will have to pass the page token received from the response with param **page=10** to get services from 2001 to 2200. If there are more services, the API responses, will have "next\_page\_token" and "previous\_page\_token" for easy pagination.

Using the page tokens from the consecutive requests, you can navigate and fetch up to **100,000** services.
- In both the above scenarios, the maximum number of services fetched per request will be only 200.
- Subform data will not be retrieved, while retrieving multiple services. You have to specify the individual service ID in the request URL to fetch the data in the subform.
- The value of the fields with sensitive health data will be retrieved **only** when **Restrict Data access through API** option in the compliance settings is **disabled**. If the option is enabled, the value will be **null**. Refer to [HIPAA compliance](https://www.zoho.com/crm/developer/docs/api/v7/hipaa-compliance.html) for more details.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Services__s?fields=Service_Name,Location,Job_Sheet_Required"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400



You cannot use both cvid and sort\_by, and page and page\_token

**Solution:** Use either "cvid" or "sort\_by" param in the request. Similarly, use either "page" or "page\_token" in the request.

- DISCRETE\_PAGINATION\_LIMIT\_EXCEEDEDHTTP 400



You can only get the first 2000 records without using page\_token param.

**Solution:** If you want to fetch more than 2000 services, you must use the "page\_token" param.

- EXPIRED\_VALUEHTTP 400



Your page token has expired.

**Solution:** page\_token is valid only for 24 hours from the time it was generated.

- INVALID\_DATAHTTP 400



You have used an invalid page\_token or the one generated by another user.

**Solution:** page\_token is user-specific. Use the one generated from your API call.

- INVALID\_MODULEHTTP 400



You have given an invalid module name in the request URL.

**Solution:** You can use only _**Services\_\_s**_ in the request URL.

- INVALID\_REQUEST\_METHODHTTP 400



You have given an invalid http request method type.

**Solution:** Use only GET method in the request URL to access this API.

- LIMIT\_EXCEEDEDHTTP 400



You exceeded the field limits.

**Solution:** You can only include a maximum of 50 field API names in the "fields" param.

- TOKEN\_BOUND\_DATA\_MISMATCHHTTP 400



You have either specified an invalid page\_token or the input param is added, altered, or deleted.

**Solution:** The page\_token is bound to the parameters used in the request. Do not change the parameters and use the page token from the response.

- PAGINATION\_LIMIT\_EXCEEDEDHTTP 400



You can only get up to first 100,000 records using page\_token param.

**Solution:** You can fetch a maximum of 100,000 records using the page\_token param in the response of GET Services API.

- REQUIRED\_PARAM\_MISSINGHTTP 400



You failed to specify either the field API names or page token in the parameter.

**Solution:** It is mandatory to specify the field API names when you want to get the data of all the services. The page token is mandatory to fetch services more than 2000.

- INVALID\_TOKENHTTP 401



You have used an invalid oauth token.

**Solution:** The access token you used has expired. Kindly refresh your token and retry.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You created the grant token using the wrong oauth scope.

**Solution:** Use either ZohoCRM.modules.services.READ or ZohoCRM.modules.services.ALL scope to create a new valid grant token.

- NO\_PERMISSIONHTTP 403



You do not have permission to get any data of services.

**Solution:** Contact your system administrator.

- INVALID\_URL\_PATTERNHTTP 404



Check if you are trying to access the correct URL.

**Solution:** You have given an invalid request URL. Refer to the endpoints section and provide a valid URL.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Solution:** Unexpected and unhandled exception in the server. Please contact our support team.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Job_Sheet_Required": "Yes",\
            "Service_Name": "Bike Service",\
            "id": "5545974000002098054",\
            "Location": "Business Address"\
        },\
        {\
            "Job_Sheet_Required": "Yes",\
            "Service_Name": "Car Service",\
            "id": "5545974000002098022",\
            "Location": "Business Address"\
        },\
        {\
            "Job_Sheet_Required": "Yes",\
            "Service_Name": "AC Repair",\
            "id": "5545974000002098002",\
            "Location": "Client Address"\
        },\
        {\
            "Job_Sheet_Required": "No",\
            "Service_Name": "Wall Painting",\
            "id": "5545974000000488035",\
            "Location": "Business Address"\
        }\
    ],
    "info": {
        "per_page": 200,
        "next_page_token": null,
        "count": 4,
        "sort_by": "id",
        "page": 1,
        "previous_page_token": null,
        "page_token_expiry": null,
        "sort_order": "desc",
        "more_records": false
    }
}

```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-services.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)