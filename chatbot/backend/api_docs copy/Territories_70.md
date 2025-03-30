

Represents the type of permission for the territory. Valid values are read\_only and read\_write\_delete.

- description string, optional



Represents the description of the territory.

- account\_rule\_criteria JSON Object, optional



Represents the criteria for Account module territory rules.



  - comparator string, optional



    Represents the comparison operator for the account rule criteria (e.g., greater\_than, less\_than).

  - fieldJSON Object, optional



    Represents the field details for the account rule criteria.



    - api\_name string, optional



      Represents the API name of the field for the account rule criteria.

    - id string, optional



      Represents the unique ID of the field for the account rule criteria.This can be obtained from [Field Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html)
  - value string, optional



    Represents the value to compare with for the account rule criteria.
- lead\_rule\_criteria JSON Object, optional



Represents the criteria for lead rules in the territory.



  - comparator string, optional



    Represents the comparison operator for the lead rule criteria (e.g., greater\_than, less\_than).

  - field JSON Object, optional



    Represents the field details for the lead rule criteria.



    - api\_name string, optional



      Represents the API name of the field for the lead rule criteria.

    - id string, optional



      Represents the unique ID of the field for the lead rule criteria. This can be obtained from [Field Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html)
  - value string, optional



    Represents the value to compare with for the lead rule criteria.
- deal\_rule\_criteria JSON Object, optional



Represents the criteria for deal rules in the territory.



  - comparator string, optional



    Represents the comparison operator for the deal rule criteria (e.g., greater\_than, less\_than).

  - field JSON Object, optional



    Represents the field details for the deal rule criteria.



    - api\_name string, optional



      Represents the API name of the field for the deal rule criteria.

    - id string, optional



      Represents the unique ID of the field for the deal rule criteria.This can be obtained from [Field Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html)
  - value string, optional



    Represents the value to compare with for the deal rule criteria.

**Note**

The following section describe field types and their allowed comparators

- **Text, Picklist, Lookup**

equal, not\_equal, contains, not\_contains, starts\_with, ends\_with

- Date literals supported and their comparators
  - **Date literal** TODAY TOMORROW TOMORROWPLUS(Starting tomorrow) YESTERDAY AGEINDAYS AGEINDAYS EMPTY **Comparator** equal
  - **Date literal** YESTERDAYMINUS(Till yesterday) **Comparator** less\_equal
  - **Date literal** NOTEMPTY **Comparator** not\_equal
  - **Date literal** LASTMONTH THISMONTH NEXTMONTH LASTWEEK THISWEEK LASTYEAR THISYEAR NEXTYEAR PREVFQ (FQ - Financial Quarter) THISFQ NEXTFQ PREVFY (FY - Financial Year)THISFY NEXTFY **Comparator** between
- Maximum number of rules supported in each criteria are 25
- Maximum number of territories that can be created in your organiztion depends upon the version of CRM
- Maximum number of territories that can be updated in one API call is 10

#### Sample Input

``` json
Copied{
  "territories": [\
    {\
      "id": "431581000000798016",\
      "name": "Territory1234",\
      "reporting_to": {\
        "id": "431581000000272796"\
      },\
      "manager": null,\
      "permission_type": "read_only",\
       "description": null,\
      "account_rule_criteria": null,\
      "lead_rule_criteria": null,\
      "deal_rule_criteria": {\
        "comparator": "greater_than",\
        "field": {\
          "api_name": "Amount",\
          "id": "431581000000000799"\
        },\
        "value": "2000000"\
      }\
    }\
  ]
}
```

#### Possible Errors

- DUPLICATE\_DATA HTTP 400



- The territory name given in the request body already exists
- There are duplicate territory names with in the request body.

**Resolution:** Specify a unique value for territory name for different territories in the body.

- MANDATORY\_NOT\_FOUND HTTP 400



- The territory ID is not provided in the body for endpoint{api-domain}/crm/{version}/settings/territories

**Resolution:** Give a valid json request including all mandatory parameters.

- INVALID\_DATA HTTP 400



- The parent territory ID is invalid
- The permission\_type is invalid
- The reporting\_to ID is invalid
- The manager ID is invalid
- The territory name is invalid. The special characters ^ ~ \` # % & + = \[ \] { } \| \ ; " ' < > , are not allowed.

**Resolution:** Refer to the "details" key in the response for the API name of the field that has the error in the input.

- TERRITORY\_NOT\_ENABLEDHTTP 403



Territory feature is not enabled

**Resolution:** Try to enable territory feature.

- TERRITORY\_DISABLEDHTTP 403



Territory feature is not enabled

**Resolution:** Try to enable territory feature.

- LIMIT\_EXCEEDEDHTTP 400



- Maximum Territory limit reached
- Maximum Users Limit reached for a territory
- Maximum Territory Criteria Limit reached

**Resolution:** Refer to the "details" key in the response for the API name of the field that has the error in the input.

#### Sample Response

``` json
Copied{
    "territories": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "431581000000798016"\
            },\
            "message": "Territory Updated Successfully",\
            "status": "success"\
        }\
 ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-territories.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)