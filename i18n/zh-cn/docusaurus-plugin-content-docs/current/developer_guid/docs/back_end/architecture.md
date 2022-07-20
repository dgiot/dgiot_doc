---
title: 架构设计
sidebar_position: 3
---


## **分层架构**

在应用系统开发中，采用严格的、单一的、真正的的分层架构是可以的，但实际上我们已经采用了多种架构模式设计系统。当多种不同范式的架构混合在一起，你会不会出现“指鹿为马”的现象呢？

+   ## **严格分层架构**
    

在研究分层架构时，常通过概念性的定义或 OSI 七层应用（架构）来说明或解释分层架构：

> 架构模式 Layers 有助于将应用程序划分为多组子任务，其中每组子任务都位于特定抽象层。

![osi.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/dgiot/ddd/osi.png)

图片取自《 POSA , Vol.I , p22 》

作为一个在项目中引入分层架构的应用者，我们应该从更具体的规范来实现分层架构：

+   相邻层之间**必须是单向耦合**。上层只能依赖下层，下层永远不能依赖上层。
    
+   相邻层之间**必须是单向通信**。上层去调用下层所提供的接口，下层永远不能调用上层的接口。
    

《 POSA , Vol.I 》 为我们提供了更多的实现规范，然而我要解决的是有关层的**单向依赖**问题。因为有一些人在使用分层架构时，尤其是将分层架构引入到项目的目录结构时，对于某些对象的划分（从属）存在一些混乱问题。

如果你有兴趣了解更多分层架构的实现规范，可参考：《 POSA , Vol.I 》第二十六页到第二十九页相关知识。

+   ## **松散分层架构（Relaxed Layered System）**
    

在领域驱动设计（DDD）中采用的是**松散分层架构**，层间关系不那么严格。每层都可能使用它下面所有层的服务，而不仅仅是下一层的服务。每层都可能是半透明的，这意味着有些服务只对上一层可见，而有些服务对上面的所有层都可见。

![osi1.png](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/dgiot/ddd/osi1.png)

注意：松散分层架构依然是单向依赖，表明上层只能调用下层的服务，下层不能调用上层的服务。

+   ## **继承分层架构（Layering Through Inheritance）**
    

同时在领域驱动设计（DDD）中也采用了**继承分层架构**，高层继承并实现低层接口。我们需要调整一下各层的顺序，并且将**基础设施层**移动到最高层。

![](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/dgiot/ddd/osi2.png)

注意：继承分层架构依然是单向依赖，这也意味着领域层、应用层、表现层将不能依赖基础设施层，相反基础设施层可以依赖它们。

领域层 UserRepository 接口：

```auto
package com.mallfoundry.user.domain;
public interface UserRepository {    User save(User user);}
```

基础设施层 JpaUserRepository 实现类：

```auto
package com.mallfoundry.user.infrastructure.persistence;
public class JpaUserRepository implements UserRepository {
    private final EntityManager entityManager;
    public JpaUserRepository(EntityManager entityManager) {        this.entityManager = entityManager;    }
    @Override    public User save(User user) {        return this.entityManager.merge(user);    }}
```

+   ## **包（Package）与分层架构**
    

我们确实使用包来划分层级，但是包名并不能真正表示分层。

+   ## **资源库（Repository）**
    

我们通常将资源库的实现放置在基础设施层，这是因为我们采用了**继承分层架构**。如果你现在采用的是**松散分层架构**，你需要将资源库的实现放置在领域层。这是层的单向依赖原则所致，你不应该破坏这个原则。没有任何理由需要破坏分层架构的单向依赖原则，除非你不采用分层架构。

+   ## **三层或四层架构**
    

![](http://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/shuwa_tech/zh/backend/dgiot/ddd/osi3.png)

我们应该从混乱到有序的这个历史过程去研究（分析）分层架构，尤其是我们现在处在前后端分离的环境下，应用系统使用分层架构又面临着什么样的划分变化。

+   第一个阶段：应用系统只有两层：表示（现）层和数据库层。在视图中直接使用数据库所提供的访问接口操作数据，如：JDBC，在视图中**直接使用** `ResultSet` 表示数据。（需要特别注意的是：在视图中直接使用 `ResultSet` 。）
    
+   第二个阶段：应用系统划分为三层：表现层、领域层和数据库层。在这个阶段，我们已经开始意识到模型了，模型的出现意味着在视图中不在直接使用 `ResultSet` 了，而是使用从 `ResultSet` 相映射的编程语言中的结构体（struct）或者对象类（class）。这表示：从编程语言中的表示法可以抽象业务域中的概念结构了。
    
+   第三个阶段：应用系统划分为四层：表现层、应用（业务）逻辑层、领域层和数据库层。由于业务逻辑依然存在视图中，我们需要将视图中的业务逻辑与视图分离出来，此时出现了应用层。同时表现层也有所推进，**表现层**使用 MVC 架构。通过在 Controller 调用应用层所提供的接口并获得接口所返回的模型（model）数据，并在 Controller 中将 model 和 view 组合起来，最终完成渲染工作。正是因为在表现层使用 MVC 架构使得视图（view）与下层实现松耦合。
    

应用系统使用分层架构在第三阶段基本已经成熟。因为我们要探讨的是有关领域驱动设计（DDD）的分层架构，所以我们依然需要做进一步补充。具体包括两方面的补充：

+   第四个阶段：面向对象的发展与应用，这个阶段对总的层次划分没有大的变化。具体的变化的是有关应用层与领域层的内容，更具体的来说是领域层的变化。面向对象的出现使得大家开始使用面向对象来设计领域模型。这表示：由**属性**和**操作**所表示的对象模型用来抽象业务域中的概念模型。同时这又表示应用（业务）逻辑层中的业务逻辑也将被**对象领域模型**所承担，应用层只需要**控制**与**协调**有关对象领域模型的相关逻辑。非常幸运的是，Eric 对这一现象中的更多细节做了非常系统性的阐述，最终形成《领域驱动设计》这本书。
    
+   第五个阶段：前后端分离后对分层架构的影响。在前后端分离的项目中，表现层被完全的从后端剥离出来，后端只需要提供接口数据，如：RESTful , gRPC , Thrift , GraphQL 协议的后端接口。此时后端还是不是四层架构呢？这确实伴随着两条发展路线：一条是服务于前端的后端模式（BFF）。另一条是基于聚合对象的接口模式。它们的区别在于 BFF 频繁变化，后者不会因为前端频繁变化而变化。
    



