package com.johnBrice.tasks.Repositories;

import com.johnBrice.tasks.beans.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface TaskRepo extends JpaRepository<Task, Integer> {
    List<Task> findByDueDateBefore(Date date);

    @Query(value = "SELECT * FROM tasks.task where is_done=?;", nativeQuery = true)
    List<Task> findByIdDone_true(boolean isDone);

    // @Query(value = "SELECT * FROM coupons JOIN customers_coupons ON coupons.id = customers_coupons.coupons_id WHERE category_id= ? and customer_id = ?;",nativeQuery = true)
    //    List<Coupon> findBycategory_idAndCustomer_id(String categoryId,  Integer customer_id);
    Boolean existsByIsDone(boolean isDone);
}
