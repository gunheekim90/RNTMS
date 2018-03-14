package com.hotelapp7;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.google.android.gms.analytics.CampaignTrackingReceiver;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by user on 2018-03-04.
 */

public class MyReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {

        if (intent != null) {
            if (intent.getAction().equals("com.android.vending.INSTALL_REFERRER")) {

                //아래와 같이 referrer 정보를 얻을 수 있습니다
                Log.d("MyReceiver", "referrer " + intent.getStringExtra("referrer"));
                String referrerData = intent.getStringExtra("referrer");
                sendReferrer(context,referrerData);

            }
        }
    }

    public void sendReferrer(Context context,String referrerData){
        final String rData = referrerData;
        RequestQueue postReqeustQueue = Volley.newRequestQueue(context);
        StringRequest postStringRequest = new StringRequest(Request.Method.POST, "url", new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                Log.d("MyReceiver Response", response);
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {

            }
        }) {
            @Override
            protected Map<String, String> getParams() {
                Map<String, String> params = new HashMap<>();
                params.put("referrerData", rData);


                return params;
            }
        };

        postReqeustQueue.add(postStringRequest);
    }
}