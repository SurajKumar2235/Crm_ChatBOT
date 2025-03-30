At Zoho, we do not use third-party software to track
website visitors. We take
your privacy seriously and use our own tools hosted in our data centres. Your data is yours, and we
never monetize it for advertisement purposes. You can learn more about our cookie policy [here](https://www.zoho.com/privacy/cookie-policy.html?src=cp-banner) and
change your preferences at any time.

Manage
Cookies

Accept All Cookies

Reject Unnecessary
Cookies

close

![Cookie policy - Zoho](https://www.zoho.com/sites/zweb/images/zoho_general_pages/cookie-widget.png)

#### Cookie Settings

The options below allow you to manage your consent for the cookies that are set on this website. You
can manage your preference anytime by visiting our [cookie\\
policy](https://www.zoho.com/privacy/cookie-policy.html?src=cp-popup) or by clicking on the cookie icon at the bottom-left corner of the webpage.

##### Strictly Necessary

Always Active


They are necessary for our website to function and cannot be switched off in our systems.
They are essential in order to enable you to navigate around the website and use its
features. If you remove or disable these cookies from your browser, we cannot guarantee
that you will be able to use our websites.

[Learn\\
More](https://www.zoho.com/privacy/cookie-policy.html?src_tab=sn)

##### Functional/Preference

They allow us to remember the choices made by you (such as your user name, language or
region) as well as other functionalities (such as controlling the cookie banner,
redirection to a new page) in order to provide a more personalised online experience.
These preferences are remembered (through the use of persistent cookies) so that you
need not set them again the next time you visit the page.

Note : The **live chat** widget will **not** work if the
functionality/preference setting is disabled.

[Learn\\
More](https://www.zoho.com/privacy/cookie-policy.html?src_tab=fp)

##### Analytics

They help us improve the way our websites work (e.g. by ensuring that users are finding
what they are looking for easily). These collect aggregate information about visits,
navigations in the websites so that we can make improvement and report our performance.
Analytics cookies may also be used to test new pages or features to understand how users
adopt them.

[Learn\\
More](https://www.zoho.com/privacy/cookie-policy.html?src_tab=an)

##### Third-party company cookies

When you visit some of our webpages that contain embedded content hosted on a third party
platform such as YouTube videos, these third parties set cookies on your browser. We
always opt for the most privacy friendly options provided by these parties, however
these are not controlled by us. If you do not want these parties to set cookies on your
browser on visiting our site, you should avoid visiting webpages that contain such
embeds.

[Learn\\
More](https://www.zoho.com/privacy/cookie-policy.html?src_tab=tp)

Save & Exit

# Transfer and Delete Territories

#### Purpose

To delete territories with child territories in your organization. Such territories cannot be deleted directly through Delete Territories API. With this API, you can transfer the child territory to another parent territory and delete the territory you want to delete.

#### End points

[POST /settings/territories/actions/transfer\_and\_delete](https://www.zoho.com/crm/developer/docs/api/v7/transfer-delete-territories.html)

[POST /settings/territories/{territoryid}/actions/transfer\_and\_delete](https://www.zoho.com/crm/developer/docs/api/v7/transfer-delete-territories.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/territories/{territoryid}/actions/transfer\_and\_delete

{api-domain}/crm/{version}/settings/territories/actions/transfer\_and\_delete

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.territories.All

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/territories/actions/transfer_and_delete"
-X POST
-d "@deleteterritories.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

In the request, "@deleteterritories.json" contains the sample input.

##### Request JSON Key

- idstring, mandatory if ID is not mentioned in the endpoint



The unique ID of the territory you want to delete.Use the [Get Territories API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html) to get the ID of the territory.

- delete\_previous\_forecastsBoolean, mandatory



Delete previous forecasts made by the territory

- transfer\_to\_idnumber, mandatory



Parent territory to which child territory must be transferred. This territory must not be at the same heirarchy as the territory you want to delete.


**Note**

Child territory must not be transferred to a territory that is lower in heirarchy than its current parent territory.

Maximum number of territories that can be deleted in one API call is 10

#### Sample Request

``` json
Copied{
    "territories" : [\
     {\
            "id" : "431581000000734117",\
            "transfer_to_id" : "431581000000734217",\
            "delete_previous_forecasts":false\
     }\
   ]
}

```

#### Possible Errors

- INVALID\_DATA HTTP 400



- Transfer\_to\_id is same as current parent territory
- Transfer\_to\_id is not a valid territory
- Transfer\_to\_id is not at a higher heirarchy than current parent territory
- Can't update the Org Territory Properties Except its Name

**Resolution:** Refer to the "details" key in the response for the API name of the field that has the error in the input.

#### Sample Response

``` json
Copied{
    "territories": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "431581000000734117"\
            },\
            "message": "Given Territory Removed Successfully and its child Territories moved to the another territory",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/transfer-delete-territories.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)