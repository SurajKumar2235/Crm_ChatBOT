
# Organization API

#### Purpose

To get the organization data.

#### Endpoints

[GET /org](https://www.zoho.com/crm/developer/docs/api/v7/get-org-data.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/org

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.org.{operation\_type}

#### Possible operation types

ALL - Full access to Organization data

READ - Get Organization data

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/org"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/org"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON Keys

- country, city, street, state, zipstring



Represents the address of the organization.

- photo\_idstring



Represents the unique ID of the organization photo file. Refer to [upload files API](https://www.zoho.com/crm/developer/docs/api/v7/upload-files-to-zfs.html) for more details.

- descriptionstring



Represents the description about the organization, if any.

- aliasstring



Represents the alias name of the organization.

- created\_timestring



Represents the date and time at which the org was created.

- typestring



Represents the environment type of the org. The possible values are **production, sandbox, bigin** and **developer**.

- currencystring



Represents the base/home currency details of the organization.

- deletable\_org\_accountboolean



Represents if the account related to this organization is deletable.

- idstring



Represents the unique ID of the organization.

- fax, mobile, primary\_email, phonestring



Represents the contact details of the organization.

- employee\_countstring



Represents the number of employees in the organization.

- websitestring



Represents the website of the organization.

- currency\_symbolstring



Represents the symbol of the base/home currency specified for the organization. For instance, '₹'.

- currency\_localestring



Represents the locale of the base/home currency specified for the organization. For instance, 'en\_IN'.

- primary\_zuidstring



Represents ZUID of the organization. This is the ID visible in the profile details in Zoho CRM UI.

- zia\_portal\_idstring



Represents Zia portal ID of the organization, if configured.

- time\_zonestring



Represents the timezone of the organization.

- zgidstring



Represents the unique ZGID of the organization.

- country\_codestring



Represents the unique code of the country that the organization belongs to. For instance, 'IN'.

- license\_detailsJSON object



Represents the license details of the organization.

- company\_namestring



Represents the name of the company in the organization.

- iso\_codestring



Represents the ISO code of the base/home currency of the organization.

- privacy\_settingsboolean



Represents if the privacy settings are enabled for the organization.

**Possible values** \- **true:** Privacy settings are enabled for the organization.

**false:** Privacy settings are disabled for the organization.

- mc\_statusboolean



Represents if the multi-currency is enabled for the organization.

**Possible values** \- **true:** The multi-currency feature is enabled for the organization.

**false:** The multi-currency feature is disabled for the organization.

- gapps\_enabledboolean



Represents if the Google Apps Integration is enabled for the organization.

**Possible values** \- **true:** The Google Apps Integration is enabled for the organization.

**false:** The Google Apps Integration is disabled for the organization.

- domain\_namestring



Represents the domain name of the organization. For instance, org694902300.

- translation\_enabledboolean



Represents if translation is enabled for the organization.

**Possible values** \- **true:** Translation is enabled for the organization.

**false:** Translation is disabled for the organization.

- hipaa\_compliance\_enabledboolean



Represents if [HIPAA compliance](https://www.zoho.com/crm/developer/docs/api/v7/hipaa-compliance.html) is enabled for the organization.

**Possible values** \- **true:** HIPAA Compliance is enabled for the organization.

**false:** HIPAA Compliance is disabled for the organization.


#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.org.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read organization data

**Resolution:** The user does not have the permission to retrieve organization data. Contact your system administrator.


#### Sample Response

``` json
Copied{
    "org": [\
        {\
            "country": null,\
            "hierarchy_preferences": {\
                "type": "Role_Hierarchy"\
            },\
            "photo_id": null,\
            "city": null,\
            "description": null,\
            "type": "production",\
            "mc_status": false,\
            "gapps_enabled": false,\
            "lite_users_enabled": false,\
            "domain_name": "org808232144",\
            "translation_enabled": false,\
            "street": null,\
            "alias": null,\
            "currency": "US Dollar - USD",\
            "deletable_org_account": false,\
            "id": "5725767000000020005",\
            "state": null,\
            "fax": null,\
            "employee_count": "1",\
            "zip": null,\
            "created_time": "2023-04-12T02:08:05-07:00",\
            "website": null,\
            "currency_symbol": "$",\
            "mobile": null,\
            "currency_locale": "USD",\
            "primary_zuid": "808233918",\
            "zia_portal_id": "814461734",\
            "time_zone": "America/Los_Angeles",\
            "zgid": "808232144",\
            "country_code": "US",\
            "license_details": {\
                "paid_expiry": "2025-04-11T17:00:00-07:00",\
                "users_license_purchased": 10,\
                "trial_type": null,\
                "trial_expiry": null,\
                "paid": true,\
                "paid_type": "enterprise",\
                "portal_users_license_purchased": 0\
            },\
            "phone": "1226652",\
            "company_name": "zohoo",\
            "privacy_settings": false,\
            "primary_email": "patricia+us@zohotest.com",\
            "hipaa_compliance_enabled": true,\
            "iso_code": "USD"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-org-data.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)