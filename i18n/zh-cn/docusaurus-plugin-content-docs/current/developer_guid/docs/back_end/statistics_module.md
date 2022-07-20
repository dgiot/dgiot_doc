---
title: 统计模块
sidebar_position: 14
---

# Prometheus

# push gateway

![image.png](https://ww.iotn2n.com/attachment/attachment/images/2021/09/02/image_1630568725_v88Z40Y0.png)

https://github.com/prometheus/pushgateway/blob/master/README.md

## 添加一个job和instance
cat <<EOF | curl --data-binary @- http://127.0.0.1:9091/metrics/job/some_job/instance/some_instance
## TYPE some_metric counter
some_metric{label="val1"} 42
## TYPE another_metric gauge
## HELP another_metric Just an example.
another_metric 2398.283
EOF
### 查询metrics
curl -X GET http://127.0.0.1:9091/api/v1/metrics
```
{
    "status":"success",
    "data":[
        {
            "another_metric":{
                "time_stamp":"2021-09-02T15:26:33.59686919+08:00",
                "type":"GAUGE",
                "help":"Just an example.",
                "metrics":[
                    {
                        "labels":{
                            "instance":"some_instance",
                            "job":"some_job"
                        },
                        "value":"2398.283"
                    }
                ]
            },
            "labels":{
                "instance":"some_instance",
                "job":"some_job"
            },
            "last_push_successful":true,
            "push_failure_time_seconds":{
                "time_stamp":"2021-09-02T15:26:33.59686919+08:00",
                "type":"GAUGE",
                "help":"Last Unix time when changing this group in the Pushgateway failed.",
                "metrics":[
                    {
                        "labels":{
                            "instance":"some_instance",
                            "job":"some_job"
                        },
                        "value":"0"
                    }
                ]
            },
            "push_time_seconds":{
                "time_stamp":"2021-09-02T15:26:33.59686919+08:00",
                "type":"GAUGE",
                "help":"Last Unix time when changing this group in the Pushgateway succeeded.",
                "metrics":[
                    {
                        "labels":{
                            "instance":"some_instance",
                            "job":"some_job"
                        },
                        "value":"1.6305675935968692e+09"
                    }
                ]
            },
            "some_metric":{
                "time_stamp":"2021-09-02T15:26:33.59686919+08:00",
                "type":"COUNTER",
                "metrics":[
                    {
                        "labels":{
                            "instance":"some_instance",
                            "job":"some_job",
                            "label":"val1"
                        },
                        "value":"42"
                    }
                ]
            }
        }
    ]
}
```

### 删除某个组下的某实例的所有数据：
curl -X DELETE http://127.0.0.1:9091/metrics/job/some_job/instance/some_instance

### 删除某个组下的所有数据：
curl -X DELETE http://127.0.0.1:9091/metrics/job/some_job


# grafana

# node_exporter

# postgres_exporter
